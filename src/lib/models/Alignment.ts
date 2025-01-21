import { cleanTitle } from './shared';
import { writableModel } from './shared/writableModel';
import { v5 as uuidv5 } from 'uuid';

export const ALIGNMENT_NAMESPACE = '1d7eccab-a6ca-43f7-bc56-906e4541d430';
export interface Alignment {
	uuid: string; // Unique identifier for the alignment
	title: string; // Core value name, e.g., "Health"
	desire: string; // Brief explanation or guiding principle
	description: string; // Brief explanation or guiding principle
	isArchived: boolean; // Whether the alignment is archived
	question: string; // question to help orient the value
	createdAt: Date; // Timestamp of creation
	updatedAt: Date; // Timestamp of last update
}

/**
 * Creates a new Alignment object.
 * @param name - Name of the alignment.
 * @param description - A brief explanation or guiding principle of the alignment. Default is an empty string.
 */
export function createAlignment(title: string, description: string = ''): Alignment {
	title = cleanTitle(title);
	return {
		uuid: uuidv5(title, ALIGNMENT_NAMESPACE),
		title,
		description,
		desire: '',
		question: '',
		isArchived: false,
		createdAt: new Date(),
		updatedAt: new Date()
	};
}

export const ALIGNMENT_METADATA = {
	about:
		'Let us each live abundantly happy lives. \
Aligned thoughts, words, and actions \
create a harmonious inner environment: body heart and mind. \
A harmonious inner environment supports finding a harmonious outter environment. \
An Alignment is an inner truth that you may name, identifying it as a core value and guiding principle. \
Writing down a true Alignment, one that is an inner truth beyond the thoughts about what it "should" be, \
is itself practicing aligning thoughts, words, and actions. \
and it may support the aligned future that you call in, leveraging your inner truth to take the pressure off your mind.',
	title:
		'The title is a key for your mind to hear and remember this core value alignment. It should resonate as a YES in your body and mind.',
	question: 'Is there a question that you are passionate about that reflects this alignment?',
	description: 'How would you describe this alignment?',
	desire:
		'What does the world look like when this alignment is fully realized? What would you like to see in your life?'
};

// ================== Alignment Store ==================

export const alignmentStore = writableModel<Alignment[]>(ALIGNMENT_NAMESPACE);
