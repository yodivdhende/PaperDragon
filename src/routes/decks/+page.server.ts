import { migration } from '../../migrations/2024-10-21T2239';
import { migrate } from '../../migrations/toLocalJsonFiles';

export async function load() {
	return migrate();
	// return { decks: await getDecks() };
}
