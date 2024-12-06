import { describe, it, expect } from 'vitest';
import { createWhyMapping, WhyMapping } from './WhyMapping';

describe('createWhyMapping', () => {
	it('should create a WhyMapping with the given values', () => {
		const whyUUID = 'why-uuid';
		const targetModel = 'Journey';
		const targetUUID = 'target-uuid';
		const referenceModel = 'Milestone';
		const referenceUUID = 'reference-uuid';
		const whyMapping: WhyMapping = createWhyMapping(
			whyUUID,
			targetModel,
			targetUUID,
			referenceModel,
			referenceUUID
		);

		expect(whyMapping.whyUUID).toBe(whyUUID);
		expect(whyMapping.targetModel).toBe(targetModel);
		expect(whyMapping.targetUUID).toBe(targetUUID);
		expect(whyMapping.referenceModel).toBe(referenceModel);
		expect(whyMapping.referenceUUID).toBe(referenceUUID);
	});

	it('should create a WhyMapping without optional referenceModel and referenceUUID', () => {
		const whyUUID = 'why-uuid';
		const targetModel = 'Waypoint';
		const targetUUID = 'target-uuid';
		const whyMapping: WhyMapping = createWhyMapping(whyUUID, targetModel, targetUUID);

		expect(whyMapping.whyUUID).toBe(whyUUID);
		expect(whyMapping.targetModel).toBe(targetModel);
		expect(whyMapping.targetUUID).toBe(targetUUID);
		expect(whyMapping.referenceModel).toBeUndefined();
		expect(whyMapping.referenceUUID).toBeUndefined();
	});
});
