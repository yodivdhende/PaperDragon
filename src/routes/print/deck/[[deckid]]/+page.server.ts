import { duplicateCards, getDeck } from '$lib/server/deck.server';

export async function load({ params }: { params: { deckid: string } }) {
	const { deckid } = params;
	if (deckid == null) return;
	const deck = await getDeck(deckid);
	if (deck == null) return undefined;
	const allCards = deck.cards.flatMap((card) => duplicateCards(card));
	return {
		deck: {
			...deck,
			cards: allCards
		}
	};
}
