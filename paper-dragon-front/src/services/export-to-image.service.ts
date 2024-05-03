import {toPng} from 'html-to-image';
import download from 'downloadjs';
import { selectedDeckNameStore } from './deck.service';
import { get } from 'svelte/store';
import { selectedCardSideStore } from './card-selector.service';

export async function exportElementToImage():Promise<void>{
    try {
    const element = document.getElementsByClassName("deck")[0];
    const image = await toPng(element as HTMLElement);
    const fileName = get(selectedDeckNameStore);
    const sideName = get(selectedCardSideStore);
    download(image,`${fileName}_${sideName}`);
    } catch(error) {
        console.error(error);
    } finally {
        return;
    }
}