import { cleanTitle, type Status } from './shared';
import { v6 as uuidv6 } from 'uuid';
export interface Step {
	id: number;
	description: string;
	status: Status;
}

// Waypoint: An achievable chunk of work.
export interface Waypoint {
	uuid: string;
	title: string;
	description: string;
	status: Status;
	steps: Step[]; // List of testable/verifiable steps
	createdAt: Date;
	updatedAt: Date;
}

export function createWaypoint(title: string, description: string = ''): Waypoint {
	return {
		uuid: uuidv6(), // Unique identifier
		title: cleanTitle(title),
		description,
		status: 'idea', // Initial status
		steps: [], // Empty list of steps
		createdAt: new Date(),
		updatedAt: new Date()
	};
}
