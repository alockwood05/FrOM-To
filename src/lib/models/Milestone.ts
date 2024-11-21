import type { Journey } from './Journey';
import { generateUUID } from '../utils/uuid';

// Milestone Model: Tracks major progress markers or achievements within a journey.

export interface Milestone {
	uuid: string; // Unique identifier
	title: string; // Name of the milestone
	description: string; // Details about the milestone
	dueDate?: Date; // Optional deadline for the milestone
	status: 'pending' | 'in-progress' | 'achieved'; // Current state
	journeyId: number; // ID of the associated Journey
	createdAt: Date; // Timestamp when the milestone was created
	updatedAt: Date; // Timestamp when the milestone was last updated
}

export function createMilestone(
	title: string,
	description: string = '',
	journeyId: number,
	dueDate?: Date
): Milestone {
	const nowDate = new Date();
	return {
		uuid: generateUUID(), // Unique identifier
		title,
		description,
		dueDate,
		status: 'pending', // Initial status
		journeyId, // Links the milestone to a specific journey
		createdAt: nowDate,
		updatedAt: nowDate
	};
}
