// Journey Model. A project tied to values and outcomes.
import { v6 as uuidv6 } from 'uuid';
import { cleanTitle, type Status } from './shared';
import { writable } from 'svelte/store';

export const JOURNEY_NAMESPACE = '695f3dc0-d1cf-49f7-a747-ec6799585f3c';
export interface Journey {
	uuid: string;
	title: string;
	description: string;
	status: Status;
	archived: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export function createJourney(title: string, description: string = ''): Journey {
	return {
		uuid: uuidv6(),
		title: cleanTitle(title),
		description,
		status: 'idea', // Initial status
		archived: false,
		createdAt: new Date(),
		updatedAt: new Date()
	};
}

// ================== Journey Store ==================

const LOCAL_STORAGE_KEY = JOURNEY_NAMESPACE;

// Load initial data from localStorage
const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
const initialData: Journey[] = storedData ? JSON.parse(storedData) : [];

// Create a writable store with the initial data
export const journeyStore = writable<Journey[]>(initialData);

// Subscribe to the store and save changes to localStorage
journeyStore.subscribe((data: Journey[]) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
});
