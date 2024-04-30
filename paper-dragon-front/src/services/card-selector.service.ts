import { derived, writable, type Writable } from 'svelte/store';
import { CARDTYPES, getDefaultTemplate, type CardType } from '../components/cards/card-type.types';

export const CARDSIDE= {
  front: "Front", 
  back: "Back",
} as const
export type CardSide = typeof CARDSIDE[keyof typeof CARDSIDE];

export const selectedCardTypeStore: Writable<CardType> = writable(CARDTYPES.trap);
export const selectedCardSideStore: Writable<CardSide> = writable(CARDSIDE.back);
export const selectedDefaulCardTemplateStore = derived( selectedCardTypeStore, (selected) => getDefaultTemplate(selected)  )

