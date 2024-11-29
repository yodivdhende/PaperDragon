import { duplicateCards, getDecks } from '$lib/server/deck.server';

export async function load() {
	const decks = (await getDecks()).map((deck) => ({
		...deck,
		cards: deck.cards.flatMap((card) => duplicateCards(card))
	}));
	return { decks };
}
