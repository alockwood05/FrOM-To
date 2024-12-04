import { cleanTitle } from '$lib/models/shared';
import { v5 as uuidv5 } from 'uuid';

export const WHY_NAMESPACE = '3008e34d-d2f8-4cdc-b846-adf9e0cf0ffe';
export interface Why {
	uuid: string; // Use uuid v5 for reproducible idntifier ;
	title: string;
	description: string; // Reason or motivation
	similarWhys: string[]; // Related motivations, uuids
	createdAt: Date;
}

export function createWhy(title: string, description: string = ''): Why {
	title = cleanTitle(title);
	return {
		uuid: uuidv5(title, WHY_NAMESPACE), // Unique identifier
		title,
		description: description.trim(),
		similarWhys: [],
		createdAt: new Date()
	};
}
