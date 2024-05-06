import {toPng} from 'html-to-image';
import download from 'downloadjs';
import { fetchDeckTypes, selectedDeckIdStore, selectedDeckNameStore } from './deck.service';
import { get } from 'svelte/store';
import { selectedCardSideStore } from './card-selector.service';

export async function exportCurrentDeck(): Promise<void>{
    try {
    const fileName = get(selectedDeckNameStore);
    await exportCurrentElement(fileName);
    } catch(error) {
        console.error(error);
    } finally {
        return;
    }
}

export async function exportAll() {
    let currentFileName: string = '';
    let deckNameUnSubscriber = selectedDeckNameStore.subscribe(fileName => {
            if(fileName == null) return;
            if(fileName === currentFileName) return;
            currentFileName = fileName;
            exportCurrentElement(fileName);
    })
    try {
    const deckTypes = await fetchDeckTypes();
    for (let {id } of deckTypes) {
        selectedDeckIdStore.set(id);
    }
    } catch(error) {
        console.error(error);
    } finally {
        deckNameUnSubscriber();
        return;
    }
}

async function exportCurrentElement(fileName?: string): Promise<void>{
    const element = document.getElementsByClassName("deck")[0] as HTMLElement
    const sideName = get(selectedCardSideStore);
    const image = await toPng(element);
    download(image,`${fileName}_${sideName}`);
}