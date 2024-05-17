import { derived, writable, type Writable } from "svelte/store"
import type { CardData } from "../components/cards/card-type.types";

const HOST = "http://localhost:3001" as const;

type DeckType = {
    name: string,
    id: string,
}

export type Deck = {
    id: string;
    cards: CardData[];
}
export const selectedDeckIdStore: Writable<DeckType['id']> = writable();
const decksStore: Writable<{id: string, name: string}[]> = writable();
export const selectedDeckNameStore = derived([selectedDeckIdStore, decksStore], ([id, decks]) => decks.find(deck => deck.id === id)?.name)



export async function fetchDeckTypes() {
    const response  = await fetch(`${HOST}/decktypes`)
    const decks = await response.json();
    const result: DeckType[] = decks.filter((deck: any): deck is DeckType => {
        return typeof deck.name === 'string' && typeof deck.id === 'string';
    }) 
    decksStore.set(result);
    return result;
}


export async function fetchDeck(id: string) {
    if(id == null) return;
    if(id === '') return;
    const response  = await fetch(`${HOST}/deck/${id}`)
    const deck: CardData[] = await response.json();
    return {
        id: id,
        cards: deck,
    };
}
