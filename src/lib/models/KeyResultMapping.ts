// KeyResultMapping: A mapping between a key result and a model.

import { writableModel } from '$lib/models/shared';

export const KEY_RESULT_MAPPING_NAMESPACE = 'f9d16987-6330-4977-8b96-cde315a48641';
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

// ================== KeyResultMapping Store ==================
export const keyResultMappingStore = writableModel<KeyResultMapping[]>(
	KEY_RESULT_MAPPING_NAMESPACE
);
