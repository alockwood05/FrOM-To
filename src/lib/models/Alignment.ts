import { cleanTitle, writableModel } from './shared';
import { v5 as uuidv5 } from 'uuid';

export const ALIGNMENT_NAMESPACE = '1d7eccab-a6ca-43f7-bc56-906e4541d430';
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
export function createAlignment(title: string, description: string = ''): Alignment {
	title = cleanTitle(title);
	return {
		uuid: uuidv5(title, ALIGNMENT_NAMESPACE),
		title,
		description,
		isArchived: false,
		createdAt: new Date(),
		updatedAt: new Date()
	};
}

// ================== Alignment Store ==================

export const alignmentStore = writableModel<Alignment[]>(ALIGNMENT_NAMESPACE);
