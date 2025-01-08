import { cleanTitle, writableModel, type Status } from './shared';
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

export const waypointStore = writableModel<Waypoint[]>(WAYPOINT_NAMESPACE);
