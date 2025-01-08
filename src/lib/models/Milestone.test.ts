import { describe, it, expect, vi } from 'vitest';
import { createMilestone, type Milestone, MILESTONE_NAMESPACE, milestoneStore } from './Milestone';
import { v6 as uuidv6 } from 'uuid';

describe('Milestone Model', () => {
	it('should create a milestone with the correct properties', () => {
		const title = 'Test Milestone';
		const description = 'This is a test milestone';
		const journeyUUID = uuidv6();
		const dueDate = new Date('2023-12-31');

		const milestone: Milestone = createMilestone(journeyUUID, title, description, dueDate);

		expect(milestone.uuid).toBeDefined();
		expect(milestone.journeyUUID).toBe(journeyUUID);
		expect(milestone.title).toBe(title);
		expect(milestone.description).toBe(description);
		expect(milestone.dueDate).toBe(dueDate);
		expect(milestone.status).toBe('idea');
		expect(milestone.createdAt).toBeInstanceOf(Date);
		expect(milestone.updatedAt).toBeInstanceOf(Date);
	});

	it('should create a milestone with default description and dueDate', () => {
		const title = 'Test Milestone';
		const journeyUUID = uuidv6();
		const milestone: Milestone = createMilestone(journeyUUID, title, '');

		expect(milestone.uuid).toBeDefined();
		expect(milestone.journeyUUID).toBe(journeyUUID);
		expect(milestone.title).toBe(title);
		expect(milestone.description).toBe('');
		expect(milestone.dueDate).toBeUndefined();
		expect(milestone.status).toBe('idea');
		expect(milestone.createdAt).toBeInstanceOf(Date);
		expect(milestone.updatedAt).toBeInstanceOf(Date);
	});
});

describe('Milestone Store', () => {
	const mockData: Milestone[] = [
		{
			uuid: 'milestone-uuid-1',
			journeyUUID: 'journey-uuid-1',
			title: 'Milestone 1',
			description: 'Description 1',
			dueDate: new Date('2023-12-31'),
			status: 'idea',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			uuid: 'milestone-uuid-2',
			journeyUUID: 'journey-uuid-2',
			title: 'Milestone 2',
			description: 'Description 2',
			dueDate: new Date('2023-12-31'),
			status: 'idea',
			createdAt: new Date(),
			updatedAt: new Date()
		}
	];

	it('should save changes to localStorage', () => {
		vi.spyOn(localStorage, 'getItem');
		vi.spyOn(localStorage, 'setItem');

		milestoneStore.set(mockData);
		expect(localStorage.setItem).toHaveBeenCalledWith(
			MILESTONE_NAMESPACE,
			JSON.stringify(mockData)
		);
	});
});
