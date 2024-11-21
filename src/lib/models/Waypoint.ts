export interface Step {
	id: number;
	description: string;
	status: 'pending' | 'in-progress' | 'complete';
}

// Waypoint Model. An achievable chunk of work.

export interface Waypoint {
	id: number;
	title: string;
	description: string;
	status: 'incomplete' | 'in-progress' | 'complete';
	steps: Step[]; // List of testable/verifiable steps
}

export function createWaypoint(title: string, description: string = ''): Waypoint {
	return {
		id: Date.now(), // Unique identifier
		title,
		description,
		status: 'incomplete', // Initial status
		steps: [] // Empty list of steps
	};
}
