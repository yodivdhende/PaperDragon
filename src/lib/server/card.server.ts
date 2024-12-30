import Decks from '$lib/data/composite-deck.json';
import { Query } from 'firebase/firestore';
import { replaceWithIcons } from './icon.server';
import Showdown from 'showdown';

export function getCards() {
	return Promise.all(
		[...Object.values(Decks)]
			.map((deck) =>
				deck.cards.map((card) => ({
					...card,
					amount: undefined
				}))
			)
			.flat()
			.map((card) => fromatCard(card))
	);
}

export async function getCard(id: string) {
	return (await getCards()).find((card) => card.id === id);
}

let converter: Showdown.Converter;
export async function fromatCard<TCard extends Record<string, unknown>>(card: TCard) {
	if (converter == null) converter = new Showdown.Converter();
	const cardWithIcons = await addIconsToCard(card);
	const newCard = {
		...cardWithIcons,
		effect: formatEffect(card, converter),
		level: formatLevel(card)
	};
	return newCard;
}

function formatEffect<TCard extends { effect?: string }>(
	card: TCard,
	converter: Showdown.Converter
): string | undefined {
	if (typeof card.effect === 'string') return converter.makeHtml(card.effect);
	return undefined;
}

function formatLevel<TCard extends { level?: string | number }>(card: TCard): number | undefined {
	if (card.level == null) return undefined;
	const levelNumber = Number(card.level);
	if (isNaN(levelNumber)) return undefined;
	return levelNumber;
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
