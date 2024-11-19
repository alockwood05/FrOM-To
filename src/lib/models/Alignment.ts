import type { Why } from '$lib/models/Why';
import { generateUUID } from '$lib/utils/uuid';

export interface Alignment {
	uuid: string; // Unique identifier for the alignment
	name: string; // Core value name, e.g., "Health"
	description: string; // Brief explanation or guiding principle
	whys: Why[]; // Related motivations
	tags: string[]; // Tags for categorization
	createdAt: Date; // Timestamp of creation
	updatedAt: Date; // Timestamp of last update
	status: 'active' | 'archived'; // State of the alignment
}

/**
 * Creates a new Alignment object.
 * @param name - Name of the alignment.
 * @param description - A brief explanation or guiding principle of the alignment. Default is an empty string.
 */
export function createAlignment(name: string, description: string = ''): Alignment {
	if (name.length === 0 || name.length > 100) {
		throw new Error('Alignment name must be between 1 and 100 characters.');
	}

	return {
		uuid: generateUUID(),
		name,
		description,
		whys: [],
		tags: [],
		createdAt: new Date(),
		updatedAt: new Date(),
		status: 'active'
	};
}
