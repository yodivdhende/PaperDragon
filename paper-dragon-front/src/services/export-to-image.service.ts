import {toPng} from 'html-to-image';
import download from 'downloadjs';
import { fetchDeck, fetchDeckTypes, selectedDeckIdStore, selectedDeckNameStore } from './deck.service';
import { get } from 'svelte/store';
import { selectedCardSideStore, type CardSide } from './card-selector.service';
import { getDeckElement } from './card-generator';

export async function exportCurrentDeck(): Promise<void>{
    try {
    const fileName = get(selectedDeckNameStore);
    const element = document.getElementsByClassName("deck")[0] as HTMLElement
    const side = get(selectedCardSideStore);
    exportCurrentElement(element, fileName ?? '', side);
    } catch(error) {
        console.error(error);
    } finally {
        return;
    }
}

export async function exportAll() {
    try {
        const side = get(selectedCardSideStore);
        const deckTypes = await fetchDeckTypes();
        for(let deckType of deckTypes){
            const deckElement = document.getElementById(deckType.id);
            if(deckElement == null) return;
            exportCurrentElement(deckElement, deckType.name, side);
        }
    } catch(error) {
        console.error(error);
    } finally {
        return;
    }
}

selectedDeckIdStore.subscribe(id => {
    console.log('selectedDeckId: ', id);
})

function exportCurrentElement(element: HTMLElement, fileName: string, side: string){
    return toPng(element).then((image) =>{
        console.log({image, element})
        download(image,`${fileName}_${side}`)
    });
}
