import { useEffect } from 'react';

export type NetworkSubscription = (payload: unknown) => boolean;

const networkSubscribers: Record<number, NetworkSubscription> = {};

export function networkEvent(subscriberId: number, payload: unknown) {
	const subscriber = networkSubscribers[subscriberId];

	if (!subscriber) {
		throw new Error(`Attempted to service unregistered subscriber: ${subscriberId}`);
	}

	const handled = subscriber(payload);

	if (!handled) {
		console.warn(`Subscriber ${subscriberId} recieved unhandled event: ${payload}`);
	}
}

function subscribe(subscriberId: number, subscriber: NetworkSubscription) {
	if (networkSubscribers[subscriberId]) {
		throw new Error(`Attempted to overwrite handler ${subscriberId}`);
	}

	networkSubscribers[subscriberId] = subscriber;
}

function unsubscribe(subscriberId: number) {
	const subscriber = networkSubscribers[subscriberId];

	if (!subscriber) {
		console.warn(`Attempted to unsubscribe unknown handler ${subscriberId}`);
	}

	delete networkSubscribers[subscriberId];
}

export function useNetworkEntity<MessageType>(
	entityId: number,
	subscriptionHandler: NetworkSubscription
 ) {
	useEffect(() => {
		subscribe(entityId, subscriptionHandler);

		return () => {
			unsubscribe(entityId);
		};
	});
};