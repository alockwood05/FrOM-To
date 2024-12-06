import { describe, it, expect, vi } from 'vitest';
import { ALIGNMENT_NAMESPACE, createAlignment } from './Alignment';
import { v5 as uuidv5 } from 'uuid';

describe('createAlignment', () => {
	it('should create an alignment with the given title and default values', () => {
		const title = 'Health';
		const alignment = createAlignment(title);

		expect(alignment.uuid).toBe(uuidv5(title, ALIGNMENT_NAMESPACE));
		expect(alignment.title).toBe('Health');
		expect(alignment.description).toBe('');
		expect(alignment.isArchived).toBe(false);
		expect(alignment.createdAt).toBeInstanceOf(Date);
		expect(alignment.updatedAt).toBeInstanceOf(Date);
	});

	it('should create an alignment with the optional description', () => {
		const title = 'Health';
		const description = 'A brief explanation';
		const alignment = createAlignment(title, description);

		expect(alignment.uuid).toBe(uuidv5(title, ALIGNMENT_NAMESPACE));
		expect(alignment.title).toBe('Health');
		expect(alignment.description).toBe('A brief explanation');
		expect(alignment.isArchived).toBe(false);
		expect(alignment.createdAt.getTime()).toBeCloseTo(Date.now(), -1);
		expect(alignment.updatedAt.getTime()).toBeCloseTo(Date.now(), -1);
	});

	it('should trim the title, and have the correct UUID', () => {
		const title = ' Health ';
		const alignment = createAlignment(title);
		expect(alignment.title).toBe('Health');
		expect(alignment.uuid).toBe(uuidv5('Health', ALIGNMENT_NAMESPACE));
	});
});
