import type { _ } from '$env/static/private';
import { getDecks } from '$lib/server/deck.server';

export async function load() {
	const decks = await getDecks();
	return {
		decks: decks.map((deck) => ({
			id: deck.id,
			name: deck.name,
			previewCard: deck.cards[0]
		}))
	};
}
