import { describe, it, expect, vi } from 'vitest';
import { createWaypoint, WAYPOINT_NAMESPACE, waypointStore } from './Waypoint';
import { v6 as uuidv6 } from 'uuid';

vi.mock('uuid', () => ({
	v6: vi.fn(() => 'mock-uuid')
}));

describe('createWaypoint', () => {
	it('should create a waypoint with the given title and default values', () => {
		const journeyUUID = 'journey-uuid';
		const title = 'New Waypoint';
		const waypoint = createWaypoint(journeyUUID, title);

		expect(waypoint.uuid).toBe('mock-uuid');
		expect(waypoint.journeyUUID).toBe(journeyUUID);
		expect(waypoint.title).toBe('New Waypoint');
		expect(waypoint.description).toBe('An achievable block of work that is worth acknowledging');
		expect(waypoint.status).toBe('idea');
		expect(waypoint.steps).toEqual([]);
		expect(waypoint.createdAt).toBeInstanceOf(Date);
		expect(waypoint.updatedAt).toBeInstanceOf(Date);
	});

	it('should create a waypoint with the given title and description', () => {
		const journeyUUID = 'journey-uuid';
		const title = 'New Waypoint';
		const description = 'This is a test waypoint';
		const waypoint = createWaypoint(journeyUUID, title, description);

		expect(waypoint.uuid).toBe('mock-uuid');
		expect(waypoint.journeyUUID).toBe(journeyUUID);
		expect(waypoint.title).toBe('New Waypoint');
		expect(waypoint.description).toBe('This is a test waypoint');
		expect(waypoint.status).toBe('idea');
		expect(waypoint.steps).toEqual([]);
		expect(waypoint.createdAt).toBeInstanceOf(Date);
		expect(waypoint.updatedAt).toBeInstanceOf(Date);
	});

	it('should have a trimmed title', () => {
		const journeyUUID = 'journey-uuid';
		const title = ' New Waypoint ';
		const waypoint = createWaypoint(journeyUUID, title);

		expect(waypoint.title).toBe('New Waypoint');
	});
});

describe('Waypoint Store', () => {
	const mockData: Waypoint[] = [
		{
			uuid: 'waypoint-uuid-1',
			journeyUUID: 'journey-uuid-1',
			title: 'Waypoint 1',
			description: 'Description 1',
			status: 'idea',
			steps: [],
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			uuid: 'waypoint-uuid-2',
			journeyUUID: 'journey-uuid-2',
			title: 'Waypoint 2',
			description: 'Description 2',
			status: 'idea',
			steps: [],
			createdAt: new Date(),
			updatedAt: new Date()
		}
	];

	it('should save changes to localStorage', () => {
		waypointStore.initialize();
		vi.spyOn(localStorage, 'getItem');
		vi.spyOn(localStorage, 'setItem');

		waypointStore.set(mockData);
		expect(localStorage.setItem).toHaveBeenCalledWith(WAYPOINT_NAMESPACE, JSON.stringify(mockData));
	});
});
