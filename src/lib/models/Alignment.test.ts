import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createAlignment } from './Alignment';
import { generateUUID } from '$lib/utils/uuid';

vi.mock('$lib/utils/uuid');

describe('Alignment Model', () => {
	beforeEach(() => {
		vi.mocked(generateUUID).mockReturnValue('test-uuid');
	});

	it('should create an alignment with the given name and default description', () => {
		const name = 'Health';
		const alignment = createAlignment(name);

		expect(alignment).toEqual({
			uuid: 'test-uuid',
			name,
			description: '',
			whys: [],
			tags: [],
			createdAt: expect.any(Date),
			updatedAt: expect.any(Date),
			status: 'active'
		});
	});

	it('should create an alignment with the given name and description', () => {
		const name = 'Integrity';
		const description = 'Being honest and having strong moral principles';
		const alignment = createAlignment(name, description);

		expect(alignment).toEqual({
			uuid: 'test-uuid',
			name,
			description,
			whys: [],
			tags: [],
			createdAt: expect.any(Date),
			updatedAt: expect.any(Date),
			status: 'active'
		});
	});

	it('should throw an error if the name is empty', () => {
		expect(() => createAlignment('')).toThrow(
			'Alignment name must be between 1 and 100 characters.'
		);
	});

	it('should throw an error if the name is longer than 100 characters', () => {
		const longName = 'a'.repeat(101);
		expect(() => createAlignment(longName)).toThrow(
			'Alignment name must be between 1 and 100 characters.'
		);
	});
});
