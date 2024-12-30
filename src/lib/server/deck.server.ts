import Decks from '../data/composite-deck.json';
import type { Deck } from '../services/deck.service';
import { writeFile } from 'fs/promises';
import { fromatCard } from './card.server';

export async function getDecks() {
	const decks = [];
	for (let deck of Object.values(Decks)) {
		//@ts-ignore
		const newCards = await Promise.all(deck.cards.map((card) => fromatCard(card)));
		if (deck.id === 'SC') console.log(newCards);
		const newDeck = {
			...deck,
			cards: newCards
		};
		decks.push(newDeck);
	}
	return decks;
}

export async function getDecksToPrint() {
	const decks = await getDecks();
	return decks.filter((deck) => deck.print);
}

export async function getDeck(id: string) {
	const result = (await getDecks()).find((deck) => deck.id === id);
	return result;
}

export async function saveDeck(deck: Deck) {
	const updatedDecks = Decks;
	//@ts-ignore
	updatedDecks[deck.id] = deck;
	await writeFile('../data/composite-deck.json', JSON.stringify(updatedDecks));
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
