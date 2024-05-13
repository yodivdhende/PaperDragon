import {toPng} from 'html-to-image';
import download from 'downloadjs';
import { fetchDeckTypes, selectedDeckIdStore, selectedDeckNameStore, selectedDeckStore } from './deck.service';
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
    let deckUnsubscriber = () => {};
    try {
    const deckTypes = await fetchDeckTypes();
    let currentDeckIndex = 0;
    selectedDeckIdStore.set(deckTypes[currentDeckIndex].id);
    deckUnsubscriber = selectedDeckStore.subscribe(async (deck)=> {
            if(deck == null) return;
            await exportCurrentDeck();
            currentDeckIndex++;
            if(deckTypes.length === currentDeckIndex) return;
            selectedDeckIdStore.set(deckTypes[currentDeckIndex].id);
    });

    } catch(error) {
        console.error(error);
    } finally {
      deckUnsubscriber();
        return;
    }
}

selectedDeckIdStore.subscribe(id => {
    console.log('selectedDeckId: ', id);
})

async function exportCurrentElement(fileName?: string): Promise<void>{
    const element = document.getElementsByClassName("deck")[0] as HTMLElement
    const sideName = get(selectedCardSideStore);
    const image = await toPng(element);
    download(image,`${fileName}_${sideName}`);
}