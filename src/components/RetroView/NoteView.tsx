import React, { useState } from "react";

import { Paper, Text, UnstyledButton } from "@mantine/core";
import { passwordText } from "../../util/TextTransformations";
import { Note } from "../../model/Retro";
import { useNetworkEntity } from "../../NetworkSubscriber";
import {
	NoteEdited,
	ServerMessage,
	ServerMessageType,
} from "../../model/ServerMessage";
import AddANote from "./AddANote";

interface NoteViewProps {
	note: Note;
	hidden?: boolean;
	allowEdit?: boolean;
	onRemoveNote?: (id: number) => void;
}

const NoteView = (props: NoteViewProps): JSX.Element => {
	const [text, setText] = useState(props.note.text);
	const [editing, setEditing] = useState(false);

	const displayText = props.hidden
		? passwordText(props.note.text)
		: props.note.text;

	useNetworkEntity(props.note.id, (payload) => {
		const message = payload as ServerMessage;
		if (message.type === ServerMessageType.NoteEdited) {
			setText(message.text);
			return true;
		}
		return false;
	});

	const onEditNote = (text: string) => {
		console.log("Editing note", text);
	};

	if (editing) {
		return <AddANote initialValue={text} onAddNote={onEditNote} />;
	} else if (!editing && props.allowEdit && !props.hidden) {
		return (
			<UnstyledButton
				onClick={() => {
					setEditing(true);
				}}
			>
				<Paper shadow="xs" withBorder p="lg">
					<Text>{displayText}</Text>
				</Paper>
			</UnstyledButton>
		);
	}

	return (
		<Paper shadow="xs" withBorder p="lg">
			<Text>{displayText}</Text>
		</Paper>
	);
};

export default NoteView;
