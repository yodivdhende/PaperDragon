export const SHEETNAMES = {
	decktypes: 'DeckTypes',
	maneuvers: 'Maneuvers',
	attacks: 'Attacks',
	items: 'Items',
	traps: 'Traps',
	minions: 'Minions',
	bosses: 'Bosses',
	artifacts: 'Artifacts',
	backgrounds: 'Backgrounds',
	statuses: 'Statuses',
	conditions: 'Conditions',
	icons: 'Icons',
	deckcontent: 'DeckContent',
	locations: 'Locations'
} as const;

export const CARDTYPES = {
	attack: 'Attacks',
	maneuver: 'Maneuvers',
	item: 'Items',
	trap: 'Traps',
	status: 'Statuses',
	condition: 'Conditions',
	minions: 'Minions',
	bosses: 'Bosses',
	artifacts: 'Artifacts',
	backgrounds: 'Backgrounds',
	locations: 'Locations'
} as const;

export type CardType = (typeof CARDTYPES)[keyof typeof CARDTYPES];

export function isCardType(cardType: string): cardType is CardType {
	return Object.values(CARDTYPES).some((type) => type === cardType);
}
