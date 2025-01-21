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

export default StatusTransitions;
