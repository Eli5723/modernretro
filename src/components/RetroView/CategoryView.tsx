import React, { useState } from "react";

import { Button, Stack, Text, TextInput, Title } from "@mantine/core";

import NoteView from "./NoteView";
import NoteEditor from "./NoteEditor";

interface CategoryViewProps {
	title: string;
}

const CategoryView = (props: CategoryViewProps): JSX.Element => {
	return (
		<Stack>
			<Title order={1}>{props.title}</Title>
			<Text>Description</Text>
			<NoteEditor />
			<NoteView
				hidden={true}
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
			/>
			<NoteView text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
			<NoteView text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
			<NoteView text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
		</Stack>
	);
};

export default CategoryView;
