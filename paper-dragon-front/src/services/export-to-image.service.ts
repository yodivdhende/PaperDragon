import {toPng} from 'html-to-image';
import download from 'downloadjs';
import { selectedDeckNameStore } from './deck.service';
import { get } from 'svelte/store';

export async function exportElementToImage():Promise<void>{
    try {
    const element = document.getElementsByClassName("deck")[0];
    const image = await toPng(element as HTMLElement);
    const fileName = get(selectedDeckNameStore);
    download(image,fileName);
    } catch(error) {
        console.error(error);
    } finally {
        return;
    }
}