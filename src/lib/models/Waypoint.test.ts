import { describe, it, expect, vi } from 'vitest';
import { createWaypoint } from './Waypoint';
import { cleanTitle } from './shared';
import { v6 as uuidv6 } from 'uuid';

vi.mock('uuid', () => ({
	v6: vi.fn(() => 'mock-uuid')
}));

vi.mock('./shared', () => ({
	cleanTitle: vi.fn((title) => title.trim())
}));

describe('createWaypoint', () => {
	it('should create a waypoint with the given title and default values', () => {
		const title = 'New Waypoint';
		const waypoint = createWaypoint(title);

		expect(waypoint.uuid).toBe('mock-uuid');
		expect(waypoint.title).toBe('New Waypoint');
		expect(waypoint.description).toBe('');
		expect(waypoint.status).toBe('idea');
		expect(waypoint.steps).toEqual([]);
		expect(waypoint.createdAt).toBeInstanceOf(Date);
		expect(waypoint.updatedAt).toBeInstanceOf(Date);
	});

	it('should create a waypoint with the given title and description', () => {
		const title = 'New Waypoint';
		const description = 'This is a test waypoint';
		const waypoint = createWaypoint(title, description);

		expect(waypoint.uuid).toBe('mock-uuid');
		expect(waypoint.title).toBe('New Waypoint');
		expect(waypoint.description).toBe('This is a test waypoint');
		expect(waypoint.status).toBe('idea');
		expect(waypoint.steps).toEqual([]);
		expect(waypoint.createdAt).toBeInstanceOf(Date);
		expect(waypoint.updatedAt).toBeInstanceOf(Date);
	});

	it('should call have a trimed title', () => {
		const title = ' New Waypoint ';
		const waypoint = createWaypoint(title);
		expect(waypoint.title).toBe('New Waypoint');
	});
});
