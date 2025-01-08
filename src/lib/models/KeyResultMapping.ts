// KeyResultMapping: A mapping between a key result and a model.

export const KEY_RESULT_MAPPING_NAMESPACE = 'f9d16987-6330-4977-8b96-cde315a48641';
export interface KeyResultMapping {
	keyResultUUID: string; // UUID of the KeyResult
	modelUUID: string; // UUID of the related model
	modelName: 'Journey' | 'Milestone' | 'Waypoint' | 'Alignment'; // Related model type
}

// Function to create a KeyResultMapping
export function createKeyResultMapping(
	keyResultUUID: string,
	modelUUID: string,
	modelName: 'Journey' | 'Milestone' | 'Waypoint' | 'Alignment'
): KeyResultMapping {
	return {
		keyResultUUID,
		modelUUID,
		modelName
	};
}

// ================== KeyResultMapping Store ==================
import { writable } from 'svelte/store';
const LOCAL_STORAGE_KEY = KEY_RESULT_MAPPING_NAMESPACE;

// Load initial data from localStorage
const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
const initialData: KeyResultMapping[] = storedData ? JSON.parse(storedData) : [];

// Create a writable store with the initial data
export const keyResultMappingStore = writable<KeyResultMapping[]>(initialData);

// Subscribe to the store and save changes to localStorage
keyResultMappingStore.subscribe((data: KeyResultMapping[]) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
});
