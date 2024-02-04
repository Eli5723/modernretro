import React from "react";

import { Paper, Text } from "@mantine/core";
import { passwordText } from "../../util/TextTransformations";

interface NoteViewProps {
	text: string;
	hidden?: boolean;
}

const NoteView = (props: NoteViewProps): JSX.Element => {
	const displayText = props.hidden ? passwordText(props.text) : props.text;

	return (
		<Paper shadow="xs" withBorder p="lg">
			<Text>{displayText}</Text>
		</Paper>
	);
};

export default NoteView;
