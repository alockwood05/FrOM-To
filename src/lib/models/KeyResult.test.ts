import { describe, it, expect, vi } from 'vitest';
import { createKeyResult, KR_NAMESPACE } from './KeyResult';
import { v5 as uuidv5 } from 'uuid'; // no need to mock uuidv5 since it is deterministic

describe('createKeyResult', () => {
	it('should create a key result with the given title and default values', () => {
		const title = 'Increase Revenue';
		const keyResult = createKeyResult(title);

		expect(keyResult.uuid).toBe(uuidv5(title, KR_NAMESPACE));
		expect(keyResult.title).toBe('Increase Revenue');
		expect(keyResult.description).toBe('');
		expect(keyResult.krStatus).toBe('not-started');
		expect(keyResult.archived).toBe(false);
		expect(keyResult.createdAt.getTime()).toBeCloseTo(Date.now(), -1);
		expect(keyResult.updatedAt.getTime()).toBeCloseTo(Date.now(), -1);
	});

	it('should create a key result with the the trimmed title, and description', () => {
		const title = ' happy users Revenue ';

		const description = 'This is a test keyResult';
		const keyResult = createKeyResult(title, description);

		expect(keyResult.uuid).toBe(uuidv5(title.trim(), KR_NAMESPACE));
		expect(keyResult.title).toBe(title.trim());
		expect(keyResult.description).toBe(description);
	});
});
