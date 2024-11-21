import { generateUUID } from '../utils/uuid';

// Why model. Tracks why's across all objects in one place

export interface Why {
	id: string;
	description: string; // Reason or motivation
	relatedIds: number[]; // IDs of linked Journeys or Waypoints
}

export function createWhy(description: string, relatedIds: number[] = []): Why {
	return {
		id: generateUUID(), // Unique identifier
		description,
		relatedIds
	};
}
