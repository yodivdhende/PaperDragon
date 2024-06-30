import { getAllDecks, splitDecks } from '$lib/server/deck.server';

export async function load() {
	const allDecks = await getAllDecks();
	return {
		decks: splitDecks(allDecks, 8)
	};
}
