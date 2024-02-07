import CategoryView from "./CategoryView";
import {
	Affix,
	AppShell,
	Button,
	Center,
	Flex,
	Group,
	Title,
} from "@mantine/core";
import Participants from "./Participants";
import RetroAgendaProps from "./RetroAgenda";
import { mockRetro } from "../../model/MockData";
import { useState } from "react";
import { Category, Participant } from "../../model/Retro";
import { networkEvent, useNetworkEntity } from "../../NetworkSubscriber";
import { ServerMessage, ServerMessageType } from "../../model/ServerMessage";

interface RetroViewProps {
	id: number;
}

const RetroView = (props: RetroViewProps): JSX.Element => {
	const [participants, setParticipants] = useState<Participant[]>(
		mockRetro.participants
	);

	useNetworkEntity(props.id, (payload) => {
		const message = payload as ServerMessage;
		switch (message.type) {
			case ServerMessageType.AddParticipant:
				setParticipants([...participants, message.participant]);
				return true;
				break;
			case ServerMessageType.RemoveParticipant:
				setParticipants(participants.filter((p) => p.id !== message.id));
				return true;
				break;
		}
		return false;
	});

	const [currentPhase, setCurrentPhase] = useState<number>(0);

	const [categories, setCategories] = useState<Category[]>(
		mockRetro.categories
	);

	return (
		<AppShell header={{ height: 60 }}>
			<AppShell.Header>
				<Group h="100%" px="md" justify="space-between">
					<Title order={3}>ModernRetro</Title>
					<Group>
						<Participants participants={participants} />
						<Button
							variant="default"
							onClick={() => {
								networkEvent(10, {
									type: ServerMessageType.NoteRemoved,
									id: 13,
								});
							}}
						>
							Next Step
						</Button>
					</Group>
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<Center>
					<Flex gap="xl">
						<RetroAgendaProps phases={mockRetro.retroPhases} currentPhase={0} />
						{categories.map((category) => (
							<CategoryView
								key={category.id}
								category={category}
								hideOtherNotes={true}
							/>
						))}
					</Flex>
					<Affix>affix</Affix>
				</Center>
			</AppShell.Main>
		</AppShell>
	);
};

export default RetroView;
