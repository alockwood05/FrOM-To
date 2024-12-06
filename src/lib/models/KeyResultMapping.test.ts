import { describe, it, expect } from 'vitest';
import { createKeyResultMapping, KeyResultMapping } from './KeyResultMapping';

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
