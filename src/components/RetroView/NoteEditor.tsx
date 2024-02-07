import { Textarea } from "@mantine/core";
import { ChangeEvent, useState } from "react";

interface NoteEditorProps {
	initialValue?: string;
	onSubmit: (note: string) => void;
	onCancel: () => void;
}

const NoteEditor = (props: NoteEditorProps): JSX.Element => {
	const [value, setValue] = useState<string>(props.initialValue || "");

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(event.currentTarget.value);
	};

	const handleKeypress = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			event.stopImmediatePropagation();
			emitCancel();
		} else if (event.key === "Enter") {
			event.stopImmediatePropagation();
			emitNote();
		}
	};

	const emitNote = () => {
		const text = value.trim();
		if (text === "") {
			console.log("Note is empty");
			emitCancel();
			return;
		}

		props.onSubmit(text);
		setValue("");
		removeEventListener("keydown", handleKeypress);
	};

	const emitCancel = () => {
		setValue("");
		removeEventListener("keydown", handleKeypress);
		props.onCancel();
	};

	return (
		<Textarea
			description="Enter to submit, Esc to cancel."
			autoFocus
			onFocus={() => {
				addEventListener("keydown", handleKeypress);
			}}
			onBlur={() => {
				removeEventListener("keydown", handleKeypress);
			}}
			onChange={handleChange}
			value={value}
		/>
	);
};

export default NoteEditor;
