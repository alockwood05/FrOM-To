import { describe, it, expect, beforeAll, vi, type Mock } from 'vitest';
import { createWhy, WHY_NAMESPACE, WhyKind, type Why, whyStore } from './Why';
import { v5 as uuidv5 } from 'uuid';

describe('Why Model', () => {
	const mockTitle = 'Test Title';
	const mockDescription = 'Test Description';

	it('should create a Why object with the given title and description and kind', () => {
		const result: Why = createWhy(mockTitle, mockDescription, WhyKind.NEED);

		expect(result).toEqual({
			uuid: uuidv5(mockTitle, WHY_NAMESPACE),
			kind: WhyKind.NEED,
			title: mockTitle,
			description: mockDescription.trim(),
			similarWhys: [],
			createdAt: expect.any(Date),
			updatedAt: expect.any(Date)
		});
	});

	it('should create a Why object with an empty description if not provided', () => {
		const result: Why = createWhy(mockTitle);
		expect(result).toEqual({
			uuid: uuidv5(mockTitle, WHY_NAMESPACE),
			kind: WhyKind.DESIRE,
			title: mockTitle,
			description: '',
			similarWhys: [],
			createdAt: expect.any(Date),
			updatedAt: expect.any(Date)
		});
	});
});

describe('Why Store', () => {
	const mockData: Why[] = [
		{
			uuid: 'test-uuid-1',
			kind: WhyKind.DESIRE,
			title: 'Test Title 1',
			description: 'Test Description 1',
			similarWhys: [],
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			uuid: 'test-uuid-2',
			kind: WhyKind.NEED,
			title: 'Test Title 2',
			description: 'Test Description 2',
			similarWhys: [],
			createdAt: new Date(),
			updatedAt: new Date()
		}
	];

	const mockLocalStorage = {
		getItem: vi.fn().mockReturnValue(JSON.stringify(mockData)),
		setItem: vi.fn()
	};

	it('should save changes to localStorage', () => {
		vi.spyOn(localStorage, 'getItem');
		vi.spyOn(localStorage, 'setItem');

		whyStore.set(mockData);
		expect(localStorage.setItem).toHaveBeenCalledWith(WHY_NAMESPACE, JSON.stringify(mockData));
	});
});
