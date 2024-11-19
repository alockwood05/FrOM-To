function generateDateUUID(): string {
	const timestamp = Date.now().toString(16); // base 16 hex string, 11 characters until year 2248
	const randomIntegers = Array.from({ length: 21 }, () =>
		Math.floor(Math.random() * 16).toString(16)
	).join('');

	let uuid = timestamp + randomIntegers;
	// Insert dashes to match the UUID format
	uuid = `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`;
	return uuid;
}

function parseDateUUID(uuid: string): { timestamp: number } {
	const timestampHexString = uuid.replace(/-/g, '').slice(0, 11);
	const timestamp = parseInt(timestampHexString, 16).toString(10);
	return { timestamp: parseInt(timestamp, 10) };
}

export const generateUUID = generateDateUUID;
export const parseUUID = parseDateUUID;
