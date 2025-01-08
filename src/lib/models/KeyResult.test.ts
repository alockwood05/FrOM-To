import { describe, it, expect, vi } from 'vitest';
import { createKeyResult, keyResultStore, KR_NAMESPACE, type KeyResult } from './KeyResult';
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

describe('KeyResult Store', () => {
	const mockData: KeyResult[] = [
		{
			uuid: 'test-uuid-1',
			title: 'Test Title 1',
			description: 'Test Description 1',
			krStatus: 'not-started',
			archived: false,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			uuid: 'test-uuid-2',
			title: 'Test Title 2',
			description: 'Test Description 2',
			krStatus: 'not-started',
			archived: false,
			createdAt: new Date(),
			updatedAt: new Date()
		}
	];

	it('should save changes to localStorage', () => {
		keyResultStore.initialize();
		vi.spyOn(localStorage, 'getItem');
		vi.spyOn(localStorage, 'setItem');

		keyResultStore.set(mockData);
		expect(localStorage.setItem).toHaveBeenCalledWith(KR_NAMESPACE, JSON.stringify(mockData));
	});
});
