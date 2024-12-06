// Journey Model. A project tied to values and outcomes.
import { v6 as uuidv6 } from 'uuid';
import { cleanTitle, type Status } from './shared';

export interface Journey {
	uuid: string;
	title: string;
	description: string;
	status: Status;
	archived: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export function createJourney(title: string, description: string = ''): Journey {
	return {
		uuid: uuidv6(),
		title: cleanTitle(title),
		description,
		status: 'idea', // Initial status
		archived: false,
		createdAt: new Date(),
		updatedAt: new Date()
	};
}
