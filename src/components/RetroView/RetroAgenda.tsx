import React, { useState } from "react";

import { Text, Title, Timeline, Paper, Divider } from "@mantine/core";
import { RetroPhase } from "../../model/Retro";

interface RetroAgendaProps {
	phases: RetroPhase[];
	currentPhase: number;
}

const RetroAgenda = (props: RetroAgendaProps): JSX.Element => {
	return (
		<Paper withBorder p="sm">
			<Title order={3} pb={"md"}>
				Agenda
			</Title>
			<Divider />
			<Timeline active={props.currentPhase} pt={"md"}>
				{props.phases.map((phase, index) => (
					<Timeline.Item key={index} title={phase.name}>
						<Text c="dimmed" size="sm">
							{phase.description}
						</Text>
						<Text size="xs" mt={4}>
							{phase.timeEsimate}
						</Text>
					</Timeline.Item>
				))}
			</Timeline>
		</Paper>
	);
};

export default RetroAgenda;
