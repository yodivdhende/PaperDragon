import { getDecks } from "$lib/server/deck.server"

export async function load() {
  return { decks: await getDecks() }
}
