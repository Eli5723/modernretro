import React, { useState } from "react";

import { useParams } from "react-router";
import RetroView from "../components/RetroView/RetroView";

const RetroPage = (): JSX.Element => {
	const { id } = useParams();

	return <RetroView />;
};

export default RetroPage;
