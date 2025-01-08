// Status type and transitions ========================================
export type Status = 'idea' | 'intention' | 'commitment' | 'current' | 'draft' | 'completion';

export const StatusTransitions: Record<Status, Status[]> = {
	idea: ['intention'],
	intention: ['commitment', 'idea'],
	commitment: ['current', 'intention'],
	current: ['draft', 'commitment', 'idea'],
	draft: ['completion', 'current', 'idea'],
	completion: []
};

// shared function cleanTitle ========================================
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

// writableModel - model store factory ========================================
import { writable } from 'svelte/store';

function fetchFromLocalStorage(namespace: string) {
	const storedData = localStorage.getItem(namespace);
	return storedData ? JSON.parse(storedData) : [];
}

export function writableModel<T>(namespace: string) {
	const { subscribe, set, update } = writable<T | null>(null); // Start with a default value, e.g., `null`.
	return {
		subscribe,
		set,
		update,
		initialize: async () => {
			const data: T = fetchFromLocalStorage(namespace);
			set(data);
			subscribe((data) => {
				localStorage.setItem(namespace, JSON.stringify(data));
			});
		}
	};
}
