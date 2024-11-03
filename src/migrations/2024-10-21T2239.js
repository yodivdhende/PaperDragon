import { fireStore } from '$lib/server/firebase.server';
import { collection, getDocs } from 'firebase/firestore';

export async function migration() {
	const [decksQuery, deckContentsQuery, cardsQuery] = await Promise.all([
		await getDocs(collection(fireStore, 'Decks')),
		await getDocs(collection(fireStore, 'DeckContents')),
		await getDocs(collection(fireStore, 'Cards'))
	]);

	const deckContents = deckContentsQuery.docs.map((doc) => doc.data());
	const cards = cardsQuery.docs.map((doc) => doc.data());
	const decks = decksQuery.docs.map((doc) => doc.data());
	return {
		deckContents,
		cards,
		decks
	};
}
