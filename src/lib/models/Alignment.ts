import { cleanTitle } from '$lib/models/model_helpers';
import { v6 as uuidv6 } from 'uuid';

export interface Alignment {
	uuid: string; // Unique identifier for the alignment
	title: string; // Core value name, e.g., "Health"
	description: string; // Brief explanation or guiding principle
	whyUUIDs: string[]; // Related motivations
	meta: {}; // Tags for categorization
	createdAt: Date; // Timestamp of creation
	updatedAt: Date; // Timestamp of last update
	status: 'active' | 'archived'; // State of the alignment
}

/**
 * Creates a new Alignment object.
 * @param name - Name of the alignment.
 * @param description - A brief explanation or guiding principle of the alignment. Default is an empty string.
 */
export function createAlignment(
	title: string,
	description: string = '',
	whyUUIDs: string[] = []
): Alignment {
	return {
		uuid: uuidv6(),
		title: cleanTitle(title),
		description,
		whyUUIDs,
		meta: {},
		createdAt: new Date(),
		updatedAt: new Date(),
		status: 'active'
	};
}
