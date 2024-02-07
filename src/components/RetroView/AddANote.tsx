import React, { ChangeEvent, useState } from "react";

import { Button, Textarea } from "@mantine/core";
import NoteEditor from "./NoteEditor";

interface AddANoteProps {}

const AddANote = (props: AddANoteProps): JSX.Element => {
	const [addingNote, setAddingNote] = useState<boolean>(false);

	const addNoteClicked = () => {
		setAddingNote(true);
	};

	const onAddNote = (note: string) => {
		setAddingNote(false);
	};

	const onCancelNote = () => {
		setAddingNote(false);
	};

	if (!addingNote) {
		return (
			<Button
				justify="center"
				fullWidth
				variant="default"
				mt="md"
				onClick={addNoteClicked}
			>
				Add a note
			</Button>
		);
	}

	return <NoteEditor onSubmit={onAddNote} onCancel={onCancelNote} />;
};

export default AddANote;
