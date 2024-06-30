import { selectedCardSideStore } from '$lib/services/card-selector.service';
import download from 'downloadjs';
import { toPng } from 'html-to-image';
import { get } from 'svelte/store';

export async function exportAll() {
	try {
		const deckElements = document.getElementsByClassName('deck');
		for (let deckElement of deckElements) {
			await exportCurrentElement(deckElement, deckElement.id);
		}
	} catch (error) {
		console.error(error);
	} finally {
		console.log(`%c All exported`, `background:lime;color:black`);
	}
}

async function exportCurrentElement(element: Element, name: string) {
	try {
		const sideName = get(selectedCardSideStore);
		const image = await toPng(element as HTMLElement);
		download(image, `${name}_${sideName}`);
	} catch (error) {
		console.log(error);
	}
}
