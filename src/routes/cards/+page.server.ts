import { getCards } from '$lib/server/card.server';



export async function load() {
  return { cards: await getCards() }
}