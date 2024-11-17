export const ATTRIBUTES = {
	mind: 'mind',
	strength: 'strength',
	reflex: 'reflex',
	void: 'void'
} as const;

export type Attribute = (typeof ATTRIBUTES)[keyof typeof ATTRIBUTES];
