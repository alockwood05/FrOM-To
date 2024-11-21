// Journey Model. A project tied to values and outcomes.

import type { Alignment } from './Alignment';
import type { Waypoint } from './Waypoint';
import type { Doer } from './Doer';
import type { Milestone } from './Milestone';

export interface Journey {
	id: number;
	title: string;
	description: string;
	keyResults: string[]; // List of measurable outcomes
	status: 'pending' | 'in-progress' | 'complete';
	alignments: Alignment[]; // Many-to-many relationship with Alignments
	waypoints: Waypoint[]; // One-to-many relationship with Waypoints
	milestones: Milestone[]; // One-to-many relationship with Milestones
	doers: Doer[]; // Many-to-many relationship with Doers
}

export function createJourney(
	title: string,
	description: string = '',
	keyResults: string[] = []
): Journey {
	return {
		id: Date.now(), // Unique identifier
		title,
		description,
		keyResults,
		status: 'pending', // Initial status
		alignments: [],
		waypoints: [],
		milestones: [], // Initialize with an empty milestones array
		doers: []
	};
}
