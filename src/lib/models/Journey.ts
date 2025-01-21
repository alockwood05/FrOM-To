// Journey Model. A project tied to values and outcomes.
import { v6 as uuidv6 } from 'uuid';
import { writableModel } from './shared/writableModel';
import { cleanTitle, type Status } from './shared';

export const JOURNEY_NAMESPACE = '695f3dc0-d1cf-49f7-a747-ec6799585f3c';
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

// ================== Journey Store ==================

export const journeyStore = writableModel<Journey[]>(JOURNEY_NAMESPACE);
