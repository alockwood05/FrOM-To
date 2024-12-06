// KeyResultMapping: A mapping between a key result and a model.
export interface KeyResultMapping {
	keyResultUUID: string; // UUID of the KeyResult
	modelUUID: string; // UUID of the related model
	modelName: 'Journey' | 'Milestone' | 'Waypoint' | 'Alignment'; // Related model type
}

// Function to create a KeyResultMapping
export function createKeyResultMapping(
	keyResultUUID: string,
	modelUUID: string,
	modelName: 'Journey' | 'Milestone' | 'Waypoint' | 'Alignment'
): KeyResultMapping {
	return {
		keyResultUUID,
		modelUUID,
		modelName
	};
}
