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
	Object.values(Decks).forEach(deck => {
		newDecks[deck.id] = {
			...deck,
			cards: deck.cards.map(card => {
			
			})
		};
	})
}

function migrateCard(
	originalCard: {id: string, cardname: string, cardid: string; },
	deckid: string,
) {
	delete originalCard.cardname;
	delete originalCard.id;
	originalCard.id = `${dickid}-${originalCard.id}`;
	return {
		...originalCard,
	}


}
