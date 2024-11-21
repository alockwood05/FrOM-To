// KeyResult model. A centralized list of all Key Results
import type { Journey } from './Journey';

export interface KeyResult {
	id: number;
	title: string; // Name or description of the key result
	targetValue: number | string; // The goal value (e.g., "10k in 60 mins" or 100%)
	currentValue: number | string; // Current progress toward the goal
	status: 'not-started' | 'in-progress' | 'achieved'; // Status of the key result
	journeys: number; // ID of the associated journey
}

export function createKeyResult(
	title: string,
	targetValue: number | string,
	journeyId: number
): KeyResult {
	return {
		id: Date.now(), // Unique identifier
		title,
		targetValue,
		currentValue: 0, // Initial progress value
		status: 'not-started', // Initial status
		journeyId // Links the key result to a specific journey
	};
}
