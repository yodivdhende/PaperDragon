import { getDeck } from '$lib/server/deck.server';

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

function duplicateCards(card: { id: string; amount: string }) {
	const cards = [];
	const amount = Number(card.amount);
	if (isNaN(amount)) return [];
	for (let index = 1; index <= amount; index++) {
		cards.push({
			...card,
			id: `${card.id}-${amount}`
		});
	}
	return cards;
}
