// Journey Model. A project tied to values and outcomes.

import type { Alignment } from './Alignment';
import type { Waypoint } from './Waypoint';
import type { Doer } from './Doer';
import type { Milestone } from './Milestone';
import type { KeyResult } from '$lib/models/KeyResult';
import { v6 as uuidv6 } from 'uuid';
import { cleanTitle, type Status } from './shared';

export interface Journey {
	uuid: string;
	title: string;
	description: string;
	status: Status;
	archived: boolean;
	createdAt: Date;
	updatedAt: Date;
	// relations
	keyResults?: KeyResult[];
	alignments?: Alignment[]; // Many-to-many relationship with Alignments
	waypoints?: Waypoint[]; // One-to-many relationship with Waypoints
	milestones?: Milestone[]; // One-to-many relationship with Milestones
	doers?: Doer[]; // Many-to-many relationship with Doers
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
