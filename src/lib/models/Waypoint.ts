import { cleanTitle, type Status } from './shared';
import { v6 as uuidv6 } from 'uuid';

export const WAYPOINT_NAMESPACE = 'eab20db3-1e46-49ea-9188-a0d2dcff7e31';
export interface Step {
	id: number;
	description: string;
	status: Status;
}

// Waypoint: An achievable chunk of work.
export interface Waypoint {
	uuid: string;
	journeyUUID: string;
	title: string;
	description: string;
	status: Status;
	steps: Step[]; // List of testable/verifiable steps
	createdAt: Date;
	updatedAt: Date;
}

export function createWaypoint(
	journeyUUID: string,
	title: string,
	description: string = 'An achievable block of work that is worth acknowledging'
): Waypoint {
	return {
		uuid: uuidv6(), // Unique identifier
		journeyUUID: journeyUUID,
		title: cleanTitle(title),
		description,
		status: 'idea', // Initial status
		steps: [], // Empty list of steps
		createdAt: new Date(),
		updatedAt: new Date()
	};
}
// ================== Waypoint Store ==================
import { writable } from 'svelte/store';
const LOCAL_STORAGE_KEY = WAYPOINT_NAMESPACE;

// Load initial data from localStorage
const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
const initialData: Waypoint[] = storedData ? JSON.parse(storedData) : [];

// Create a writable store with the initial data
export const waypointStore = writable<Waypoint[]>(initialData);

// Subscribe to the store and save changes to localStorage
waypointStore.subscribe((data: Waypoint[]) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
});
