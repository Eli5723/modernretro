import React, { useContext, useEffect } from "react";

type RetroEventHandler<PayloadT> = (payload: PayloadT) => void;

const events: Record<string, RetroEventHandler<any>> = {};

function handleEvent(eventId: string, payload: any) {
	const eventHandler = events[eventId];

	if (!eventHandler) {
		throw new Error(`Attempted to service unregistered event: ${eventId}`);
	}

	eventHandler(payload);
}

function subscribe(eventId: string, handler: RetroEventHandler<any>) {
	if (events[eventId]) {
		console.warn(`Overwrote existing handler ${eventId}`);
	}

	events[eventId] = handler;
}

function unsubscribe(eventId: string) {
	const eventHandler = events[eventId];

	if (!eventHandler) {
		console.warn(`Attempted to clear unassigned handler ${eventId}`);
		return;
	}

	delete events[eventId];
}

const RetroContext = React.createContext({ subscribe, unsubscribe });

const useRetroEvent = (eventId: string, handler: RetroEventHandler<any>) => {
	useEffect(() => {
		subscribe(eventId, handler);

		return () => {
			unsubscribe(eventId);
		};
	});
};

export { RetroContext, useRetroEvent };
