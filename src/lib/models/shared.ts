// shared types
export type Status = 'idea' | 'intention' | 'commitment' | 'current' | 'draft' | 'completion';

const StatusTransitions: Record<Status, Status[]> = {
	idea: ['intention'],
	intention: ['commitment', 'idea'],
	commitment: ['current', 'intention'],
	current: ['draft', 'commitment', 'idea'],
	draft: ['completion', 'current', 'idea'],
	completion: []
};

// shared functions
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
