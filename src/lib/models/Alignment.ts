import { cleanTitle } from './shared';
import { v6 as uuidv6 } from 'uuid';

export interface Alignment {
	uuid: string; // Unique identifier for the alignment
	title: string; // Core value name, e.g., "Health"
	description: string; // Brief explanation or guiding principle
	isArchived: boolean; // Whether the alignment is archived
	createdAt: Date; // Timestamp of creation
	updatedAt: Date; // Timestamp of last update
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
		isArchived: false,
		createdAt: new Date(),
		updatedAt: new Date()
	};
}
