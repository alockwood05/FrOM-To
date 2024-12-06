import { describe, it, expect, vi } from 'vitest';
import { createJourney } from '$lib/models/Journey';

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
