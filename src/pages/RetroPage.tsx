import React, { useState } from "react";

import { useParams } from "react-router";
import { useRetroEvent } from "../RetroContext";
import RetroView from "../components/RetroView/RetroView";

const RetroPage = (): JSX.Element => {
	const { id } = useParams();

	const [ohYeahCount, setOhYeahCount] = useState(0);

	useRetroEvent("AddOhYeah!", (count: number) => {
		setOhYeahCount(ohYeahCount + count);
	});

	return <RetroView />;
};

export default RetroPage;
