import type { CardData } from '$lib/components/cards/card-data.types';
import { SHEETNAMES, type CardType } from '$lib/components/cards/card-type.types';
import { migrateCards } from './mirgration.server';
import { getSheetData } from './spread-fetch.server';

let allCards: Record<CardType, CardData[]>;
export async function getAllCards() {
	if (allCards) return allCards;
	const [
		maneuvers,
		attacks,
		items,
		traps,
		minions,
		bosses,
		artifacts,
		backgrounds,
		conditions,
		statuses,
		locations
	] = await Promise.all([
		getSheetData(SHEETNAMES.maneuvers),
		getSheetData(SHEETNAMES.attacks),
		getSheetData(SHEETNAMES.items),
		getSheetData(SHEETNAMES.traps),
		getSheetData(SHEETNAMES.minions),
		getSheetData(SHEETNAMES.bosses),
		getSheetData(SHEETNAMES.artifacts),
		getSheetData(SHEETNAMES.backgrounds),
		getSheetData(SHEETNAMES.conditions),
		getSheetData(SHEETNAMES.statuses),
		getSheetData(SHEETNAMES.locations)
	]);
	allCards = {
		maneuvers,
		attacks,
		items,
		traps,
		minions,
		bosses,
		artifacts,
		backgrounds,
		conditions,
		statuses,
		locations
	} as Record<CardType, CardData[]>;
	migrateCards(allCards);
	return allCards;
}
