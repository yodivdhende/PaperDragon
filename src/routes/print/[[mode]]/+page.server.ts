import { getDecks, splitDecks } from '$lib/server/deck.server';

export async function load({ params }) {
	const allDecks = await getDecks();
	const shouldSplit = params.mode === 'split';
	console.log(shouldSplit);
	return {
		decks: shouldSplit ? splitDecks(allDecks, 8) : allDecks
	};
}
