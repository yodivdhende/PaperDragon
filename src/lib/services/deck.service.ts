import type { CardData } from "$lib/components/cards/card-data.types";
import { derived, writable, type Writable } from "svelte/store"

type DeckType = {
    name: string,
    id: string,
}

export type Deck = {
    id: string,
    cards: CardData[],
}

export const selectedDeckIdStore: Writable<DeckType['id']> = writable();
const decksStore: Writable<{id: string, name: string}[]> = writable();
export const selectedDeckNameStore = derived([selectedDeckIdStore, decksStore], ([id, decks]) => decks.find(deck => deck.id === id)?.name)
