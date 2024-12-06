import { describe, it, expect } from 'vitest';
import { createMilestone, type Milestone } from './Milestone';
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
