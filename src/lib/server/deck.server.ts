import { replaceWithIcons } from './icon.server';
import Decks from '../data/composite-deck.json';
import type { Deck } from '../services/deck.service';
import { writeFile } from 'fs/promises';

export async function getDecks() {
	const decks = [];
	for (let deck of Object.values(Decks)) {
		//@ts-ignore
		deck.cards = await Promise.all(deck.cards.map(card => addIconsToCard(card)))
		console.log(deck.cards);
		decks.push(deck);
	}
	return decks;
}

export async function getDeck(id: string) {
	const result = (await getDecks()).find(deck => deck.id === id);
	return result;
}

export async function saveDeck(deck: Deck) {
	const updatedDecks = Decks;
	//@ts-ignore
	updatedDecks[deck.id] = deck;
	await writeFile('../data/composite-deck.json', JSON.stringify(updatedDecks))
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

async function addIconsToCard<TCard extends Record<string, unknown>>(card: TCard) {
	let result: TCard = {} as TCard;
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
