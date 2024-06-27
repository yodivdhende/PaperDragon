import { getDeckTypes } from "$lib/server/deck.server";

export async function load() {
    const decktypes = await getDeckTypes();
    return {
        decktypes,
    } 
}