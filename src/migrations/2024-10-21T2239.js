import { fireStore } from "$lib/server/firebase.server";
import { collection, getDocs } from "firebase/firestore";

export async function migration() {
    const [
        decksQuery,
        deckContentsQuery,
        cardsQuery,
    ] = await Promise.all([
        await getDocs(collection(fireStore, 'Decks')),
        await getDocs(collection(fireStore, 'DeckContents')),
        await getDocs(collection(fireStore, 'Cards')),
    ]);

    const deckContents = deckContentsQuery.docs.map(doc => doc.data());
    const cards = cardsQuery.docs.map(doc => doc.data());
    const decks = decksQuery.docs.map(doc => doc.data()).map(deck => {
        const deckCards = deckContents
            .filter(content => deck.cards.include(content.id))
            .map(content => {
                const card = cards.find(card => content.cardId === card.id);
                return {
                    ...card,
                    ...content,
                }
            })

        return  {
            ...deck,
            faceCard: deckCards[0],
        }

    });


    console.log(decks)
}