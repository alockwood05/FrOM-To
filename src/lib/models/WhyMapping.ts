// WHy ~ DesireMapping
// - Why this {target}?
// - Because of this {why} and this {reference}
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
