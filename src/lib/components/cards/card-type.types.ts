export const CARDTYPES = {
	attack: 'Attack',
	maneuver: 'Maneuver',
	item: 'Item',
	trap: 'Trap',
	status: 'Statuse',
	condition: 'Condition',
	minions: 'Minion',
	bosses: 'Boss',
	artifacts: 'Artifact',
	backgrounds: 'Background',
	locations: 'Location'
} as const;

export type CardType = (typeof CARDTYPES)[keyof typeof CARDTYPES];

export function isCardType(cardType: string): cardType is CardType {
	return Object.values(CARDTYPES).some((type) => type === cardType);
}
