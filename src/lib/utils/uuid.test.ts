import { describe, it, expect } from 'vitest';
import { generateUUID, parseUUID } from './uuid';

describe('UUID Utils', () => {
	it('should generate a valid UUID', () => {
		const uuid = generateUUID();
		expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
		expect(uuid.length).toBe(36);
	});

	it('should parse the timestamp from a UUID', () => {
		const uuid = generateUUID();
		const { timestamp } = parseUUID(uuid);
		const parsedDate = new Date(timestamp);
		expect(parsedDate).not.toBeNaN();
		expect(parsedDate.getTime()).not.toBeNaN();
		const now = new Date(); // current time
		const oneHourInMillis = 60 * 60 * 1000;
		expect(Math.abs(now.getTime() - parsedDate.getTime())).toBeLessThan(oneHourInMillis);
	});

	it('should generate unique UUIDs', () => {
		const uuid1 = generateUUID();
		const uuid2 = generateUUID();
		expect(uuid1).not.toBe(uuid2);
	});
});
