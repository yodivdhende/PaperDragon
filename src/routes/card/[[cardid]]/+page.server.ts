import { getCard } from '$lib/server/card.server';

export async function load({ params }: { params: { cardid: string } }) {
  const { cardid } = params;
  if (cardid == null) return;
  const card = await getCard(cardid);
  return { card }
}