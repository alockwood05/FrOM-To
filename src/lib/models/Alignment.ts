import { cleanTitle } from './shared';
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
import { writable } from 'svelte/store';

const LOCAL_STORAGE_KEY = ALIGNMENT_NAMESPACE;

// Load initial data from localStorage
const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
const initialData: Alignment[] = storedData ? JSON.parse(storedData) : [];

// Create a writable store with the initial data
export const alignmentStore = writable<Alignment[]>(initialData);

// Subscribe to the store and save changes to localStorage
alignmentStore.subscribe((data: Alignment[]) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
});
