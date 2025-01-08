import { cleanTitle } from './shared';
import { v5 as uuidv5 } from 'uuid';

export const enum WhyKind {
	DESIRE = 'desire',
	NEED = 'need'
}

export const WHY_NAMESPACE = '3008e34d-d2f8-4cdc-b846-adf9e0cf0ffe';
export interface Why {
	uuid: string; // Use uuid v5 for reproducible idntifier ;
	kind: WhyKind;
	title: string;
	description: string; // Reason or motivation
	similarWhys: string[]; // List of similar whys UUIDs
	parent?: string;
	createdAt: Date;
	updatedAt: Date;
}

export function createWhy(
	title: string,
	description: string = '',
	kind: WhyKind = WhyKind.DESIRE
): Why {
	title = cleanTitle(title);
	return {
		uuid: uuidv5(title, WHY_NAMESPACE), // Unique identifier
		kind,
		title,
		description: description.trim(),
		similarWhys: [],
		createdAt: new Date(),
		updatedAt: new Date()
	};
}

// ================== Why Store ==================
import { writable } from 'svelte/store';

const LOCAL_STORAGE_KEY = WHY_NAMESPACE;

// Load initial data from localStorage
const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
const initialData: Why[] = storedData ? JSON.parse(storedData) : [];

// Create a writable store with the initial data
export const whyStore = writable(<Why[]>initialData);
// whyStore.set(data) is equivalent to whyStore.update(() => data)
// whyStore.get() is equivalent to $whyStore

// Subscribe to the store and save changes to localStorage
whyStore.subscribe((data: Why[]) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
});
