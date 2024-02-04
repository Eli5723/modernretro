import React from "react";

import CategoryView from "./CategoryView";
import { Affix, Center, Flex } from "@mantine/core";

interface RetroViewProps {}

const RetroView = (props: RetroViewProps): JSX.Element => {
	return (
		<Center>
			<Flex gap="xl">
				<CategoryView title="Start" />
				<CategoryView title="Stop" />
				<CategoryView title="Continue" />
			</Flex>
			<Affix>affix</Affix>
		</Center>
	);
};

export default RetroView;
