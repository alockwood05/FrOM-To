// WHy ~ DesireMapping
// - Why this {target}?
// - Because of this {why} and this {reference}

export const WHY_MAPPING_NAMESPACE = '508a5acc-64f5-4b5e-abe4-558e95a6bde4';

export interface WhyMapping {
	whyUUID: string;
	targetModel: 'Journey' | 'Milestone' | 'Waypoint' | 'KeyResult'; // Related model type}
	targetUUID: string;
	referenceModel?: 'Journey' | 'Milestone' | 'Waypoint' | 'KeyResult'; // Related model type}
	referenceUUID?: string;
}

// Function to create a WhyMapping
export function createWhyMapping(
	whyUUID: string,
	targetModel: 'Journey' | 'Milestone' | 'Waypoint' | 'KeyResult',
	targetUUID: string,
	referenceModel?: 'Journey' | 'Milestone' | 'Waypoint' | 'KeyResult',
	referenceUUID?: string
): WhyMapping {
	return {
		whyUUID,
		targetUUID,
		targetModel,
		referenceUUID,
		referenceModel
	};
}

// ================== WhyMapping Store ==================
import { writable } from 'svelte/store';

const LOCAL_STORAGE_KEY = WHY_MAPPING_NAMESPACE;

// Load initial data from localStorage
const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
const initialData: WhyMapping[] = storedData ? JSON.parse(storedData) : [];

// Create a writable store with the initial data
export const whyMappingStore = writable(<WhyMapping[]>initialData);
// whyMappingStore.set(data) is equivalent to WhyMappingStore.update(() => data)
// WhyMappingStore.get() is equivalent to $WhyMappingStore

// Subscribe to the store and save changes to localStorage
whyMappingStore.subscribe((data: WhyMapping[]) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
});
