import type { Status } from '$lib/models/shared';
import { cleanTitle } from '$lib/models/shared';
import { v6 as uuidv6 } from 'uuid';

// Milestone Model: Tracks major progress markers or achievements within a journey.

export interface Milestone {
	uuid: string; // Unique identifier
	journeyUUID: string; // ID of the associated Journey
	title: string; // Name of the milestone
	description: string; // Details about the milestone
	dueDate?: Date; // Optional deadline for the milestone
	status: Status; // Current state
	createdAt: Date; // Timestamp when the milestone was created
	updatedAt: Date; // Timestamp when the milestone was last updated
}

export function createMilestone(
	journeyUUID: string,
	title: string,
	description: string = '',
	dueDate?: Date
): Milestone {
	const nowDate = new Date();

	return {
		uuid: uuidv6(), // Unique identifier
		title: cleanTitle(title),
		description: description.trim(),
		dueDate,
		status: 'idea', // Initial status
		journeyUUID, // Links the milestone to a specific journey
		createdAt: nowDate,
		updatedAt: nowDate
	};
}
