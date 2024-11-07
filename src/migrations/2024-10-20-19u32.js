import { fireStore } from '$lib/server/firebase.server';
import { collection, FirestoreError, getDoc, getDocs, runTransaction } from 'firebase/firestore';

async function migration() {
	try {
		const deckRef = collection(fireStore, 'Decks');
		const deckContentRef = collection(fireStore, 'DeckContents');
		const cardsRef = collection(fireStore, 'Cards');
		const decks = await getDocs(deckRef);
		const deckContent = await getDocs(deckContentRef);
		const cards = await getDocs(cardsRef);
	} catch (error) {
		console.error(error);
	}
}

migration().then(() => {});
