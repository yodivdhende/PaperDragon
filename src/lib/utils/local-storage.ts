import type { CardData } from '$lib/components/cards/card-data.types';
import type { DeckType } from '$lib/server/deck.server';
import { writable, type Writable } from 'svelte/store';

export type LocalStoreTypes = {
	Cards: CardData;
	DeckTypes: DeckType;
};
export type LocalStorageKeys = keyof LocalStoreTypes;

export class LocalWritableStore<
	TKey extends LocalStorageKeys,
	TValue extends LocalStoreTypes[TKey]
> {
	private localStrorageKey: TKey;
	private store: Writable<TValue | null>;

	constructor(key: TKey) {
		this.localStrorageKey = key;
		this.store = writable(localStorage.get(this.localStrorageKey));
		this.store.subscribe((value) => localStorage.set(this.localStrorageKey, value));
	}

	public setValue(value: TValue) {
		this.store.set(value);
		return this;
	}

	public read() {
		return this.store;
	}
}
