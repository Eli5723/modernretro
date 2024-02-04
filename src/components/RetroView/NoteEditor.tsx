import React, { useState } from "react";

import { Button, TextInput } from "@mantine/core";

import NoteView from "./NoteView";

const NoteEditor = (): JSX.Element => {
	const [addingNote, setAddingNote] = useState<boolean>(false);

	const addNoteClicked = () => {
		setAddingNote(true);
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

	return <TextInput />;
};

export default NoteEditor;
