import { getDecks } from '$lib/server/deck.server';
import { migration } from '../../migrations/2024-10-21T2239';

export async function load() {
	migration();
	return { decks: await getDecks() };
}
