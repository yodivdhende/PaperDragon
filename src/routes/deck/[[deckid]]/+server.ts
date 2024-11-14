import { json } from '@sveltejs/kit';
import { saveDeck } from '../../../lib/server/deck.server';

export async function POST({ request }) {
  try {
    const deck = await request.json();
    await saveDeck(deck);
    return json('success');
  } catch (error) {
    return json(error);
  }
}