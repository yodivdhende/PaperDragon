import {toPng} from 'html-to-image';
import download from 'downloadjs';
import { fetchDeck, fetchDeckTypes, selectedDeckIdStore, selectedDeckNameStore, selectedDeckStore } from './deck.service';
import { get } from 'svelte/store';
import { selectedCardSideStore } from './card-selector.service';
import Deck from '../components/deck.svelte';

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
        for(let deckType of deckTypes) {
            const deckElement = document.createElement('div');
            deckElement.id = deckType.id;
            const deckData  = await fetchDeck(deckType.id);
            if(deckData === undefined) continue;
            const deck = new Deck({
               target: deckElement,
               props: {deck: deckData}
            })
            console.log(deck);
        }
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