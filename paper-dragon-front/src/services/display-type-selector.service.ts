import { writable, type Writable } from 'svelte/store';

export const DISPLAYTYPES = {
    template: 'template',
    deck: 'deck',
} as const
export type DisplayType = typeof DISPLAYTYPES[keyof typeof DISPLAYTYPES];

export let currentDisplayStore: Writable<DisplayType>=  writable();
