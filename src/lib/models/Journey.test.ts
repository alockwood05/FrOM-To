import { describe, it, expect, vi } from 'vitest';
import { createJourney, type Journey, journeyStore, JOURNEY_NAMESPACE } from '$lib/models/Journey';

vi.mock('uuid', () => ({
	v6: vi.fn(() => 'mock-uuid')
}));

describe('createJourney', () => {
	it('should create a journey with the given title and default values', () => {
		const title = 'New Journey';
		const journey = createJourney(title);
		const now = new Date();

		expect(journey.uuid).toBe('mock-uuid');
		expect(journey.title).toBe('New Journey');
		expect(journey.description).toBe('');
		expect(journey.status).toBe('idea');
		expect(journey.archived).toBe(false);
		expect(journey.createdAt.getTime()).toBeCloseTo(now.getTime(), -1);
		expect(journey.updatedAt.getTime()).toBeCloseTo(now.getTime(), -1);
	});

	it('should create a journey with the given title trimmed and description', () => {
		const title = '  New Journey ';
		const description = 'A brief description';
		const journey = createJourney(title, description);
		const now = new Date();

		expect(journey.uuid).toBe('mock-uuid');
		expect(journey.title).toBe('New Journey');
		expect(journey.description).toBe('A brief description');
		expect(journey.status).toBe('idea');
		expect(journey.archived).toBe(false);
		expect(journey.createdAt.getTime()).toBeCloseTo(now.getTime(), -1);
		expect(journey.updatedAt.getTime()).toBeCloseTo(now.getTime(), -1);
	});
});

describe('Journey Store', () => {
	const mockData: Journey[] = [
		{
			uuid: 'test-uuid-1',
			title: 'Test Title 1',
			description: 'Test Description 1',
			status: 'idea',
			archived: false,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			uuid: 'test-uuid-2',
			title: 'Test Title 2',
			description: 'Test Description 2',
			status: 'idea',
			archived: false,
			createdAt: new Date(),
			updatedAt: new Date()
		}
	];

	it('should save changes to localStorage', () => {
		journeyStore.initialize();
		vi.spyOn(localStorage, 'getItem');
		vi.spyOn(localStorage, 'setItem');

		journeyStore.set(mockData);
		expect(localStorage.setItem).toHaveBeenCalledWith(JOURNEY_NAMESPACE, JSON.stringify(mockData));
	});
});
