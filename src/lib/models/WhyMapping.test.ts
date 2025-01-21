import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
	createWhyMapping,
	type WhyMapping,
	whyMappingStore,
	WHY_MAPPING_NAMESPACE
} from './WhyMapping';

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

describe('WhyMapping Store', () => {
	const mockData: WhyMapping[] = [
		{
			whyUUID: 'test-uuid-1',
			targetModel: 'Journey',
			targetUUID: 'target-uuid-1',
			referenceModel: 'Milestone',
			referenceUUID: 'reference-uuid-1'
		},
		{
			whyUUID: 'test-uuid-2',
			targetModel: 'Waypoint',
			targetUUID: 'target-uuid-2'
		}
	];

	beforeEach(() => {
		vi.mock('svelte', () => ({
			getContext: vi.fn(),
			hasContext: vi.fn(),
			setContext: vi.fn(),
			onMount: vi.fn((callback) => callback())
		}));
	});

	describe('#set()', () => {
		it('should save changes to localStorage', () => {
			const whyMappings = whyMappingStore();
			vi.spyOn(localStorage, 'getItem');
			vi.spyOn(localStorage, 'setItem');

			whyMappings.set(mockData);
			expect(localStorage.setItem).toHaveBeenCalledWith(
				WHY_MAPPING_NAMESPACE,
				JSON.stringify(mockData)
			);
		});
	});
});
