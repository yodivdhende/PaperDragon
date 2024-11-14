import type { CardData } from '$lib/components/cards/card-data.types';
import { replaceWithIcons } from './icon.server';
import Decks from '../data/composite-deck.json';
import type { Deck } from '../services/deck.service';

export async function getDecks() {
	return Object.values(Decks);
}

export async function getDeck(id: string) {
	const result = Decks[id as keyof typeof Decks]
	return result;
}

export function splitDecks(decks: Deck[], cardLimit: number) {
	return decks.flatMap((deck) => {
		if (deck == null) return [];
		const deckSplits: Deck[] = [];
		deck.cards.forEach((card, i) => {
			if (i % cardLimit === 0) {
				deckSplits.push({
					...deck,
					id: deck.id + deckSplits.length + 1,
					cards: []
				});
			}
			deckSplits[deckSplits.length - 1]?.cards.push(card);
		});
		return deckSplits;
	});
}

async function addIconsToCard(card: CardData) {
	let result: CardData = {} as CardData;
	const parametersOfCards = Object.entries(card);
	for (let [key, value] of parametersOfCards) {
		if (typeof value === 'string') {
			//@ts-ignore
			result[key] = await replaceWithIcons(value);
		} else {
			//@ts-ignore
			result[key] = value;
		}
	}
	return result;
}
