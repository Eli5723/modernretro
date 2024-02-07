import React, { useState } from "react";

import { Avatar, Tooltip } from "@mantine/core";

interface Participant {
	name: string;
	iconURL?: string;
	id: number;
}

interface ParticipantsProps {
	participants: Participant[];
}

const Participants = (props: ParticipantsProps): JSX.Element => {
	const maximumAvatars = 4;

	const participantAvatars = props.participants
		.slice(0, maximumAvatars)
		.map((participant) => (
			<Tooltip key={participant.id} label={participant.name} withArrow>
				<Avatar radius="xl" src={participant.iconURL} />
			</Tooltip>
		));

	if (props.participants.length > maximumAvatars) {
		const overflowParticipants = props.participants.slice(maximumAvatars);

		participantAvatars.push(
			<Tooltip
				key={-1}
				label={
					<>
						{overflowParticipants.map((participant) => (
							<div key={participant.id}>{participant.name}</div>
						))}
					</>
				}
				withArrow
			>
				<Avatar>{`+${overflowParticipants.length}`}</Avatar>
			</Tooltip>
		);
	}

	return (
		<Tooltip.Group>
			<Avatar.Group>{participantAvatars}</Avatar.Group>
		</Tooltip.Group>
	);
};

export default Participants;
