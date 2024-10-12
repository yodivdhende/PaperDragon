import type { CardData } from '$lib/components/cards/card-data.types';
import { collection, getDocs } from 'firebase/firestore';
// import { getAllCards } from './card.server';
import { replaceWithIcons } from './icon.server';
// import { getSheetData } from './spread-fetch.server';
import { fireStore } from './firebase.server';
import { ArtifactCardTemplate } from '../components/cards/artifact-card.type';
import { BackgroundCardTemplate } from '../components/cards/background-card.type';

let deckTypes: DeckType[];
export async function getDeckTypes() {
	if (deckTypes) return deckTypes;
	// deckTypes = (await getSheetData(SHEETNAMES.decktypes)) as unknown as DeckType[];
	return deckTypes;
}

let deckContentList: DeckMeta[];
export async function getDeckContents() {
	if (deckContentList) return deckContentList;
	// deckContentList = (await getSheetData(SHEETNAMES.deckcontent)) as any;
	return deckContentList;
}

function mockGetDeck(id: string) {
	return fakeDecks.find(deck => deck.id === id);
}


export async function getDeck(id: string) {
	const deckTypes = await getDeckTypes();
	const deckMeta = deckTypes.find((deck) => deck.id === id);
	if (deckMeta == null) return console.warn(`can't find deck with id ${id}`);

	// const allCards = Object.entries(await getAllCards()).flatMap(([key, value]) =>
	// 	value.map((card) => {
	// 		card.cardType = key as CardType;
	// 		return card;
	// 	})
	// );
	const deckContent = (await getDeckContents()).filter(
		(deckLine) => deckLine.deckid === deckMeta.id
	);

	const cards: CardData[] = [];
	for (let deckLine of deckContent) {
		const { cardid, amount, id, print } = deckLine;
		if (print === 'FALSE') continue;
		// const card = allCards.find((card) => card.id === cardid);
		// if (card == null) {
		// 	console.warn(`cant find card wiht id ${cardid}`);
		// 	continue;
		// }
		// for (let count = 0; count < Number(amount); count++) {
		// 	const newCard = {
		// 		...(await addIconsToCard(card)),
		// 		id: `${id}-${count + 1}`
		// 	};
		// 	cards.push(newCard);
		// }
	}
	return {
		...deckMeta,
		cards
	};
}

export async function getDecks() {
	// const deckTypes = await getDeckTypes();
	// return Promise.all(deckTypes.map((deckType) => getDeck(deckType.id)));

	const desksRef = collection(fireStore, 'Decks');
	const querySnaptshot = await getDocs(desksRef);
	const decks: { id: string, name: string, previewCard: CardData }[] = [];
	querySnaptshot.forEach((doc) => {
		decks.push(doc.data() as any);
	})
	return decks;

	// return fakeDecks;
}

export function splitDecks(decks: Deck[], cardLimit: number) {
	return decks.flatMap((deck) => {
		if (deck == null) return [];
		const deckSplits: Deck[] = [];
		deck.cards.forEach((card, i) => {
			if (i % cardLimit === 0) {
				deckSplits.push({
					...deck,
					id: deck.id + deckSplits.length + 1,
					cards: []
				});
			}
			deckSplits[deckSplits.length - 1]?.cards.push(card);
		});
		return deckSplits;
	});
}

async function addIconsToCard(card: CardData) {
	let result: CardData = {} as CardData;
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

type DeckType = {
	id: string;
	name: string;
	columns: number;
	rows: number;
	amoundofcards: number;
	uniqueback: boolean;
	deckname: string;
	front: string;
	back: string;
	export: string;
};

type DeckMeta = {
	deckid: string;
	deckname: string;
	cardid: string;
	cardname: string;
	print: string;
	amount: number;
	id: string;
};

export type Deck = Awaited<ReturnType<typeof getDeck>>;

const fakeDecks = [
	{ id: '1', name: 'deck1', previewCard: ArtifactCardTemplate },
	{ id: '2', name: 'deck2', previewCard: BackgroundCardTemplate }
] as const;
