import Decks from '$lib/data/composite-deck.json';
import { replaceWithIcons } from './icon.server';
import * as showdown from 'showdown';

export function getCards() {
	const converter = new showdown.Converter;
	return Promise.all([...Object.values(Decks)]
		.map((deck) => deck.cards.map(card => ({
			...card,
			amount: undefined,
		}))
		)
		.flat()
		.map(card => fromatCard(card, converter))
	)
}

export async function getCard(id: string) {
	return (await getCards()).find(card => card.id === id);
}

export async function fromatCard<TCard extends Record<string, unknown>>(card: TCard, converter: showdown.Converter) {
	let newCard = await addIconsToCard(card);
	newCard = formatEffect(card, converter);
	newCard = formatLevel(card);
	return newCard;
}

function formatEffect<TCard extends Record<string, unknown>>(card: TCard, converter: showdown.Converter): TCard {
	if (typeof card.effect === 'string') {
		card = {
			...card,
			effect: converter.makeHtml(card.effect),
		}
	}
	return card;
}

function formatLevel<TCard extends { level?: string | number }>(card: TCard): TCard {
	if (card.level == null) return card;
	const levelNumber = Number(card.level);
	if (isNaN(levelNumber)) return card;
	card.level = levelNumber;
	return card;
}

export async function addIconsToCard<TCard extends Record<string, unknown>>(card: TCard) {
	let result: TCard = {} as TCard;
	const parametersOfCards = Object.entries(card);
	for (let [key, value] of parametersOfCards) {
		if (typeof value === 'string') {
			//@ts-ignore
			result[key] = await replaceWithIcons(value);
		} else {
			//@ts-ignore
			result[key] = value;
		}
	}
	return result;
}

export function duplicateCards(card: { id: string; amount: string }) {
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
