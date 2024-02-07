import { useState } from "react";

import { Stack, Text, Title } from "@mantine/core";

import NoteView from "./NoteView";
import AddANote from "./AddANote";

import { Category } from "../../model/Retro";
import { useNetworkEntity } from "../../NetworkSubscriber";
import { ServerMessage, ServerMessageType } from "../../model/ServerMessage";

interface CategoryViewProps {
	category: Category;
	hideOtherNotes: boolean;
}

const CategoryView = (props: CategoryViewProps): JSX.Element => {
	const localParticipant = { id: 1, name: "Test User" };
	const [notes, setNotes] = useState(props.category.notes);

	useNetworkEntity(props.category.id, (payload) => {
		const message = payload as ServerMessage;
		switch (message.type) {
			case ServerMessageType.NoteAdded:
				setNotes((prev) => [...prev, message.note]);
				return true;
			case ServerMessageType.NoteRemoved:
				setNotes((prev) => prev.filter((note) => note.id !== message.id));
				return true;
		}
		return false;
	});

	const onAddNote = (note: string) => {
		console.log("Adding note", note);
	};

	const onEditNote = (id: number, text: string) => {};

	const onRemoveNote = (id: number) => {};
	return (
		<Stack>
			<Title order={1}>{props.category.title}</Title>
			<Text>{props.category.description}</Text>
			<AddANote onAddNote={onAddNote} />
			{notes.map((note) => (
				<NoteView
					key={note.id}
					note={note}
					hidden={localParticipant.id !== note.authorId && props.hideOtherNotes}
					onRemoveNote={onRemoveNote}
					onEditNote={onEditNote}
					allowEdit={true}
				/>
			))}
		</Stack>
	);
};

export default CategoryView;
