import { describe, it, expect, vi } from 'vitest';
import { createAlignment } from './Alignment';
import { cleanTitle } from './shared';

vi.mock('uuid', () => ({
	v6: vi.fn(() => 'mock-uuid')
}));

vi.mock('$lib/models/shared', () => ({
	cleanTitle: vi.fn((title) => title.trim())
}));

describe('createAlignment', () => {
	it('should create an alignment with the given title and default values', () => {
		const title = 'Health';
		const alignment = createAlignment(title);

		expect(alignment.uuid).toBe('mock-uuid');
		expect(alignment.title).toBe('Health');
		expect(alignment.description).toBe('');
		expect(alignment.isArchived).toBe(false);
		expect(alignment.createdAt).toBeInstanceOf(Date);
		expect(alignment.updatedAt).toBeInstanceOf(Date);
	});

	it('should create an alignment with the given title, description, and whyUUIDs', () => {
		const title = 'Health';
		const description = 'A brief explanation';
		const alignment = createAlignment(title, description);

		expect(alignment.uuid).toBe('mock-uuid');
		expect(alignment.title).toBe('Health');
		expect(alignment.description).toBe('A brief explanation');
		expect(alignment.isArchived).toBe(false);
		expect(alignment.createdAt.getTime()).toBeCloseTo(Date.now(), -1);
		expect(alignment.updatedAt.getTime()).toBeCloseTo(Date.now(), -1);
	});

	it('should call cleanTitle with the given title', () => {
		const title = ' Health ';
		const alignment = createAlignment(title);
		expect(alignment.title).toBe('Health');
	});
});
