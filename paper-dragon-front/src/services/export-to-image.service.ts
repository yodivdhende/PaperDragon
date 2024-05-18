import {toPng} from 'html-to-image';
import download from 'downloadjs';
import { fetchDeckTypes, selectedDeckIdStore, selectedDeckNameStore, selectedDeckStore } from './deck.service';
import { get } from 'svelte/store';
import { selectedCardSideStore } from './card-selector.service';

export async function exportCurrentDeck(): Promise<void>{
    try {
    const fileName = get(selectedDeckNameStore);
    const element = document.getElementsByClassName("deck")[0] as HTMLElement
    await exportCurrentElement(element, fileName);
    } catch(error) {
        console.error(error);
    } finally {
        return;
    }
}

export async function exportAll() {
    try {
        const deckTypes = await fetchDeckTypes();
        for(let deckType of deckTypes) {
            const deck = document.getElementById(deckType.id);
            if(deck == null) continue;
            await exportCurrentElement(deck, deckType.name);
        }
    } catch(error) {
        console.error(error);
    } finally {
        console.log(`%c exportAll Done`,`background:lime;color:black`);
        return;
    }
}


async function exportCurrentElement(element: HTMLElement, fileName?: string): Promise<void>{
    const sideName = get(selectedCardSideStore);
    const image = await toPng(element);
    download(image,`${fileName}_${sideName}`);
}