// KeyResult model. A centralized list of all Key Results
import { cleanTitle, writableModel } from './shared';
import { v5 as uuidv5 } from 'uuid';

export const KR_NAMESPACE = '1a3c758f-03ac-4246-b6b1-e27b2e3e6b2c'; // Random UUID (V4)

type KRStatus = 'not-started' | 'in-progress' | 'achieved';

type KRNominalMetric = {
	type: 'nominal_target';
	targetValue: number;
	currentValue: number;
};

type KRCompletionPercentageMetric = {
	type: 'completion_percentage';
	targetValue: number;
	currentValue: number;
};

type KRBinaryMetric = {
	type: 'binary';
	isComplete: boolean;
};

type KRCustomOutcome = {
	title: string;
	description: string;
	isComplete: boolean;
	isTarget: boolean;
};

type KRCustomOutcomesMetric = {
	type: 'custom_outcomes';
	outcomes: KRCustomOutcome[];
};

export interface KeyResult {
	uuid: string;
	title: string; // Name or description of the key result
	description: string; // Additional details about the key result
	krStatus: KRStatus; // Status of the key result
	metrics?:
		| KRNominalMetric
		| KRCompletionPercentageMetric
		| KRBinaryMetric
		| KRCustomOutcomesMetric;
	archived: boolean; // Whether the key result is archived
	createdAt: Date; // Date the key result was created
	updatedAt: Date; // Date the key result was last updated
}

export function createKeyResult(title: string, description: string = ''): KeyResult {
	title = cleanTitle(title);
	return {
		uuid: uuidv5(title, KR_NAMESPACE), // unique title enforced by UUID v5
		title,
		description,
		krStatus: 'not-started', // Initial status
		archived: false, // Not archived by default
		createdAt: new Date(),
		updatedAt: new Date()
	};
}

// ================== KeyResult Store ==================
export const keyResultStore = writableModel<KeyResult[]>(KR_NAMESPACE);
