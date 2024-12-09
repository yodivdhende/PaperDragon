export const ATTRIBUTES = {
	mind: 'mind',
	strength: 'strength',
	reflex: 'reflex',
	trouble: 'trouble',
	luck: 'luck'
} as const;

export type Attribute = (typeof ATTRIBUTES)[keyof typeof ATTRIBUTES];
