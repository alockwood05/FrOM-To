// Doer model. This is the user.

import type { Journey } from './Journey';

export interface Doer {
	id: number;
	name: string; // User’s name
	email: string; // User’s email
	preferences: Record<string, any>; // App preferences as a key-value object
	journeys: Journey[]; // Many-to-many relationship with Journeys
}

export function createDoer(
	name: string,
	email: string,
	preferences: Record<string, any> = {}
): Doer {
	return {
		id: Date.now(), // Unique identifier
		name,
		email,
		preferences,
		journeys: []
	};
}
