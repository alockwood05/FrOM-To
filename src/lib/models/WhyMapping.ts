// WHy ~ DesireMapping
// - Why this {target}?
// - Because of this {why} and this {reference}

import { writableModel } from '$lib/models/shared';

export const WHY_MAPPING_NAMESPACE = '508a5acc-64f5-4b5e-abe4-558e95a6bde4';

export interface WhyMapping {
	whyUUID: string;
	targetModel: 'Journey' | 'Milestone' | 'Waypoint' | 'KeyResult'; // Related model type}
	targetUUID: string;
	referenceModel?: 'Journey' | 'Milestone' | 'Waypoint' | 'KeyResult'; // Related model type}
	referenceUUID?: string;
}

// Function to create a WhyMapping
export function createWhyMapping(
	whyUUID: string,
	targetModel: 'Journey' | 'Milestone' | 'Waypoint' | 'KeyResult',
	targetUUID: string,
	referenceModel?: 'Journey' | 'Milestone' | 'Waypoint' | 'KeyResult',
	referenceUUID?: string
): WhyMapping {
	return {
		whyUUID,
		targetUUID,
		targetModel,
		referenceUUID,
		referenceModel
	};
}

// ================== WhyMapping Store ==================
export const whyMappingStore = writableModel<WhyMapping[]>(WHY_MAPPING_NAMESPACE);
