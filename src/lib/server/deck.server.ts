import type { CardData } from "$lib/components/cards/card-data.types";
import { SHEETNAMES, type CardType } from "$lib/components/cards/card-type.types";
import { getAllCards } from "./card.server";
import { replaceWithIcons } from "./icon.server";
import { getSheetData } from "./spread-fetch.server";

 
export async function getDeckTypes() {
    return getSheetData(SHEETNAMES.decktypes)as unknown as  DeckType[]
}


let deckContentList: DeckMeta[];
export async function getDeckContents() {
    if(deckContentList) return deckContentList;
    deckContentList = await getSheetData(SHEETNAMES.deckcontent) as any;
    return deckContentList;
}

export async function getDeck(id: string) {
    const deckTypes = await getDeckTypes();
    const deckMeta = deckTypes.find((deck => deck.id === id));
    if(deckMeta == null) return console.warn(`can't find deck with id ${id}`);

    const allCards = Object.entries(await getAllCards()).flatMap(([key, value]) => 
        value.map((card) => {
            card.cardType = key as CardType;
            return card;
        })
    )
    const deckContent = (await getDeckContents()).filter(
        (deckLine) => deckLine.deckId === deckMeta.id
    );

    const resultDeck: (CardData & {deck: DeckType})[] = [];
    for(let deckLine of deckContent) {
        const {cardId, amount, id, print} = deckLine;
        if(print === "FALSE") return;
        const card = allCards.find((card) => card.id === cardId);
        if(card == null) return console.warn(`cant find card wiht id ${cardId}`);
        for (let count = 0; count < amount; count ++) {
            resultDeck.push({
                ...(await addIconsToCard(card)),
                id: `${id}-${count + 1}`,
                deck: deckMeta,
            })
        }
    }
    return resultDeck;
}


async function addIconsToCard(card: CardData) {
    let result: CardData = {} as CardData;
    const parametersOfCards = Object.entries(card);
    for(let [key, value] of parametersOfCards) {
        if(typeof value === 'string') {
            //@ts-ignore
            result[key] = await replaceWithIcons(value)
        } else {
            //@ts-ignore
            result[key] = value;
        }

    }
    return result;
}

type DeckType = {
        id: string,
        name: string, 
        columns: number,
        rows: number,
        amoundofcards: number,
        uniqueback: boolean,
        deckname: string,
        front: string,
        back: string,
        export: string,
    }

type DeckMeta = {
    deckId: string,
    deckName: string,
    cardId: string,
    cardName: string,
    print: string,
    amount: number,
    id: string,
}
