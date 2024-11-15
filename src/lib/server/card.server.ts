import type { CardData } from '../components/cards/card-data.types';
import Decks from '$lib/data/composite-deck.json';
import { addIconsToCard } from './deck.server';

export function getCards() {
	return Promise.all(Object.values(Decks)
		.map((deck) => deck.cards.map(card => {
			//@ts-ignore
			card.amount = undefined;
			return card;
		}))
		.flat()
		.map(card => addIconsToCard(card))
	)
}

export function getCard(id: string): CardData | undefined {
	//TODO fetch card from firstore and return;
	return;
}