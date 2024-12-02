import { describe, it, expect, beforeEach, afterEach, vi, type Mock } from 'vitest';
import { createWhy, WHY_NAMESPACE, type Why } from './Why';
import { v5 as uuidv5 } from 'uuid';

describe('Why Model', () => {
	const mockTitle = 'Test Title';
	const mockDescription = 'Test Description';

	it('should create a Why object with the given title and description', () => {
		const result: Why = createWhy(mockTitle, mockDescription);

		expect(result).toEqual({
			uuid: uuidv5(mockTitle, WHY_NAMESPACE),
			title: mockTitle,
			description: mockDescription.trim(),
			similarWhys: [],
			createdAt: expect.any(Date)
		});
	});

	it('should create a Why object with an empty description if not provided', () => {
		const result: Why = createWhy(mockTitle);
		expect(result).toEqual({
			uuid: uuidv5(mockTitle, WHY_NAMESPACE),
			title: mockTitle,
			description: '',
			similarWhys: [],
			createdAt: expect.any(Date)
		});
	});
});
