import { cleanTitle } from './shared';
import { v5 as uuidv5 } from 'uuid';

export const enum WhyKind {
	DESIRE = 'desire',
	OBLIGATION = 'obligation'
}

export const WHY_NAMESPACE = '3008e34d-d2f8-4cdc-b846-adf9e0cf0ffe';
export interface Why {
	uuid: string; // Use uuid v5 for reproducible idntifier ;
	kind: WhyKind;
	title: string;
	description: string; // Reason or motivation
	similarWhys: string[]; // List of similar whys UUIDs
	parent?: string;
	createdAt: Date;
	updatedAt: Date;
}

export function createWhy(
	title: string,
	description: string = '',
	kind: WhyKind = WhyKind.DESIRE
): Why {
	title = cleanTitle(title);
	return {
		uuid: uuidv5(title, WHY_NAMESPACE), // Unique identifier
		kind,
		title,
		description: description.trim(),
		similarWhys: [],
		createdAt: new Date(),
		updatedAt: new Date()
	};
}
