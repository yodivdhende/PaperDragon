import { duplicateCards } from '$lib/server/card.server';
import { getDecksToPrint } from '$lib/server/deck.server';

export async function load() {
	const decks = (await getDecksToPrint()).map((deck) => ({
		...deck,
		cards: deck.cards.flatMap((card) => duplicateCards(card))
	}));
	return { decks };
}
