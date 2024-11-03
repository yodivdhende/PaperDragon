import decks from '$lib/data/decks.json';
import deckContent from '$lib/data/deckContents.json';
import cards from '$lib/data/cards.json';
import LocationCard from '$lib/components/cards/location-card.svelte';

export function migrate() {
	const deckHash = {};
	decks
		.map((deck) => {
			const composetCards = deckContent
				.filter((content) => content.deckid === deck.id)
				.map((content) => {
					const card = cards.find((card) => card.id === content.cardid);
					return { ...content, ...card };
				});
			return {
				...deck,
				cards: composetCards
			};
		})
		.filter((content) => content != null)
		.forEach((deck) => (deckHash[deck.id] = deck));
	return deckHash;
}
