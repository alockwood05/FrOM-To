import { describe, it, expect, vi } from 'vitest';
import { createAlignment } from '$lib/models/Alignment';
import { cleanTitle } from '$lib/models/model_helpers';

vi.mock('uuid', () => ({
	v6: vi.fn(() => 'mock-uuid')
}));

vi.mock('$lib/models/model_helpers', () => ({
	cleanTitle: vi.fn((title) => title.trim())
}));

describe('createAlignment', () => {
	it('should create an alignment with the given title and default values', () => {
		const title = 'Health';
		const alignment = createAlignment(title);

		expect(alignment.uuid).toBe('mock-uuid');
		expect(alignment.title).toBe('Health');
		expect(alignment.description).toBe('');
		expect(alignment.whyUUIDs).toEqual([]);
		expect(alignment.meta).toEqual({});
		expect(alignment.status).toBe('active');
		expect(alignment.createdAt).toBeInstanceOf(Date);
		expect(alignment.updatedAt).toBeInstanceOf(Date);
	});

	it('should create an alignment with the given title, description, and whyUUIDs', () => {
		const title = 'Health';
		const description = 'A brief explanation';
		const whyUUIDs = ['uuid1', 'uuid2'];
		const alignment = createAlignment(title, description, whyUUIDs);

		expect(alignment.uuid).toBe('mock-uuid');
		expect(alignment.title).toBe('Health');
		expect(alignment.description).toBe('A brief explanation');
		expect(alignment.whyUUIDs).toEqual(['uuid1', 'uuid2']);
		expect(alignment.meta).toEqual({});
		expect(alignment.status).toBe('active');
		expect(alignment.createdAt).toBeInstanceOf(Date);
		expect(alignment.updatedAt).toBeInstanceOf(Date);
	});

	it('should call cleanTitle with the given title', () => {
		const title = ' Health ';
		createAlignment(title);

		expect(cleanTitle).toHaveBeenCalledWith(' Health ');
	});

	it('should set the status to active by default', () => {
		const title = 'Health';
		const alignment = createAlignment(title);

		expect(alignment.status).toBe('active');
	});

	it('should set the createdAt and updatedAt to the current date', () => {
		const title = 'Health';
		const now = new Date();
		vi.setSystemTime(now);
		const alignment = createAlignment(title);

		expect(alignment.createdAt).toEqual(now);
		expect(alignment.updatedAt).toEqual(now);
	});
});

	it('should call cleanTitle with the given title', () => {
		const title = ' Health ';
		createAlignment(title);

		expect(cleanTitle).toHaveBeenCalledWith(' Health ');
	});
});
