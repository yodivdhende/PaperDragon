import { getDeck } from '$lib/server/deck.server.js';

export async function load({ params }: { params: { deckid: string } }) {
    const { deckid } = params;
    if (deckid == null) return;
    const deck = await getDeck(deckid);
    return { deck }
}