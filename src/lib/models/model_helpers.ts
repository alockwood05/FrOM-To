// functions that clean and validate data to asign to models
// shared helper fns

export function cleanTitle(title: string) {
	const trimmedTitle = title.trim();
	const isValid = trimmedTitle.length >= 4 && /^[a-zA-Z0-9\s]+$/.test(trimmedTitle);
	if (!isValid) {
		throw new Error(
			'Title must be at least 4 characters long and contain only alphanumeric characters and spaces'
		);
	}
	return trimmedTitle;
}

export function isValidUUID(uuid: string): uuid is UUID {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
	return uuidRegex.test(uuid);
}
