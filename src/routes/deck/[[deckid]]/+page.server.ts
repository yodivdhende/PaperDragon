import { getDeck } from '$lib/server/deck.server.js';

export async function load({params}) {
    const {deckid} = params;
    return {
        deck: getDeck(deckid),
    }    

}