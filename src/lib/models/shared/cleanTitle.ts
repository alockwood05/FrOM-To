// cleanTitle utility to validate and clean up title properties in models
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
