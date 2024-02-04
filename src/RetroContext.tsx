import React, { useContext, useEffect } from "react";

type RetroEventHandler = () => void;

const events: Record<string, RetroEventHandler | null> = {};

function handleEvent(eventId: string) {
    const eventHandler = events[eventId];

    if (!eventHandler) {
        throw new Error(`Attempted to service unregistered event: ${eventId}`);
    }

    eventHandler();
}

function subscribe(eventId: string, handler: RetroEventHandler) {
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

    events[eventId] = null;
}

const RetroContext = React.createContext({ subscribe, unsubscribe })

const useRetroEvent = (eventId: string, handler: RetroEventHandler) => {
    const { subscribe, unsubscribe } = useContext(RetroContext);

    useEffect(() => {
        subscribe(eventId, handler);

        return () => {
            unsubscribe(eventId);
        }
    });
}

export { RetroContext, useRetroEvent };