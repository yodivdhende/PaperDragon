import { replaceState } from '$app/navigation';
import Decks from '$lib/data/composite-deck.json';

// export function migrate() {
// 	const newCards = cards;
// 	const deckHash = {};
// 	decks
// 		.map((deck) => {
// 			const composetCards = deckContent
// 				.filter((content) => content.deckid === deck.id)
// 				.map((content) => {
// 					const card = cards.find((card) => card.id === content.cardid);
// 					return { ...content, ...card };
// 				});
// 			return {
// 				...deck,
// 				cards: composetCards
// 			};
// 		})
// 		.filter((content) => content != null)
// 		.forEach((deck) => (deckHash[deck.id] = deck));

// 	return deckHash;
// }

export function migrate() {
	const newDecks = {};
	Object.values(Decks).forEach((deck) => {
		// @ts-ignore
		newDecks[deck.id] = {
			...deck,
			cards: deck.cards.map((card) => migrateCard(card))
		};
	});
	return newDecks;
}

// @ts-ignore
function migrateCard(originalCard) {
	delete originalCard.cardname;
	delete originalCard.cardid;
	originalCard.id = `${originalCard.deckid}-${originalCard.id}`;
	delete originalCard.deckid;
	const result = {};
	if (['Attack', 'Maneuver', 'Item', 'Trap'].includes(originalCard.type)) {
		console.log(JSON.stringify(originalCard));
		result.abilities = getAbilities(originalCard);
	}
	delete originalCard.mind;
	delete originalCard.strength;
	delete originalCard.reflex;

	return {
		originalCard,
		...result
	};
}

// @ts-ignore
function getAbilities(card) {
	const result = [];
	const mindPoints = Number(card.mind);
	const strengthPoints = Number(card.strength);
	const reflexPoints = Number(card.reflex);

	console.log(mindPoints, strengthPoints, reflexPoints);

	if (!isNaN(mindPoints)) {
		for (let i = 0; i < mindPoints; i++) {
			result.push('mind');
		}
	}
	if (!isNaN(strengthPoints)) {
		for (let i = 0; i < strengthPoints; i++) {
			result.push('strength');
		}
	}
	if (!isNaN(reflexPoints)) {
		for (let i = 0; i < reflexPoints; i++) {
			result.push('reflex');
		}
	}

	return result;
}
