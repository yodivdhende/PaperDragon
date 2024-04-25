import { writable, type Writable } from "svelte/store"
import type Card from "../components/card-templates/card.svelte";
import type { CardData } from "../components/card-templates/card-templates.type";

const HOST = "http://localhost:3001" as const;

type DeckType = {
    name: string,
    id: string,
}

type Deck = CardData[];
export const deckTypesStore: Writable<DeckType[]> = writable();
export const selectedDeckIdStore: Writable<DeckType['id']> = writable();

fetch(`${HOST}/decktypes`).then(async (response) => {
    const decks = await response.json();
    if(decks.every((deck: any): deck is DeckType => typeof deck.name === 'string' && typeof deck.id === 'string')) {
        deckTypesStore.set(decks)
    }
})


export function getDeck(id: string): Writable<Deck> {
    const deckStore: Writable<Deck> = writable();
    fetch(`${HOST}/deck/${id}`).then(async(response) => {
        const deck:Deck  = await response.json();
        deckStore.set(deck);
    })
    return deckStore;
}
