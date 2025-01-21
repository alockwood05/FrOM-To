import { describe, it, expect, beforeAll, vi, type Mock, beforeEach } from 'vitest';
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

	beforeEach(() => {
		vi.mock('svelte', () => ({
			getContext: vi.fn(),
			hasContext: vi.fn(),
			setContext: vi.fn(),
			onMount: vi.fn((callback) => callback())
		}));
	});

	it('should save changes to localStorage', () => {
		const whys = whyStore();
		vi.spyOn(localStorage, 'getItem');
		vi.spyOn(localStorage, 'setItem');

		whys.set(mockData);
		expect(localStorage.setItem).toHaveBeenCalledWith(WHY_NAMESPACE, JSON.stringify(mockData));
	});
});
