import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
	createKeyResultMapping,
	type KeyResultMapping,
	keyResultMappingStore,
	KEY_RESULT_MAPPING_NAMESPACE
} from './KeyResultMapping';

describe('createKeyResultMapping', () => {
	it('should create a KeyResultMapping with the given values', () => {
		const keyResultUUID = 'key-result-uuid';
		const modelUUID = 'model-uuid';
		const modelName = 'Journey';
		const keyResultMapping: KeyResultMapping = createKeyResultMapping(
			keyResultUUID,
			modelUUID,
			modelName
		);

		expect(keyResultMapping.keyResultUUID).toBe(keyResultUUID);
		expect(keyResultMapping.modelUUID).toBe(modelUUID);
		expect(keyResultMapping.modelName).toBe(modelName);
	});
});

describe('KeyResultMapping Store', () => {
	const mockData: KeyResultMapping[] = [
		{
			keyResultUUID: 'key-result-uuid-1',
			modelUUID: 'model-uuid-1',
			modelName: 'Journey'
		},
		{
			keyResultUUID: 'key-result-uuid-2',
			modelUUID: 'model-uuid-2',
			modelName: 'Journey'
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

	it('should save changes to localStorage', () => {
		const keyResultMappings = keyResultMappingStore();
		vi.spyOn(localStorage, 'getItem');
		vi.spyOn(localStorage, 'setItem');

		keyResultMappings.set(mockData);
		expect(localStorage.setItem).toHaveBeenCalledWith(
			KEY_RESULT_MAPPING_NAMESPACE,
			JSON.stringify(mockData)
		);
	});
});
