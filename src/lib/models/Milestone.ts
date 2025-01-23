import type { Status } from '$lib/models/shared';
import { cleanTitle, writableModel } from '$lib/models/shared';
import { v6 as uuidv6 } from 'uuid';

// Milestone Model: Tracks major progress markers or achievements within a journey.
export const MILESTONE_NAMESPACE = '5573a74e-a039-4222-b8f6-2969439f7856';
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

// ================== Milestone Store ==================
export const milestoneStore = writableModel<Milestone[]>(MILESTONE_NAMESPACE, []);
