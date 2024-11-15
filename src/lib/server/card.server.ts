import type { CardData } from '../components/cards/card-data.types';
import Decks from '$lib/data/composite-deck.json';
import { addIconsToCard } from './deck.server';

export function getCards() {
	return Promise.all([...Object.values(Decks)]
		.map((deck) => deck.cards.map(card => ({
			...card,
			amount: undefined,
		}))
		)
		.flat()
		.map(card => addIconsToCard(card))
	)
}

export async function getCard(id: string) {
	return (await getCards()).find(card => card.id === id);
}