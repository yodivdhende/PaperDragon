import { AttackCardTemplate, BossCardTemplate, TrapCardTemplate, type ActionCardBackData, type BossesCardData, type CardData, type TrapCardData } from "../../components/cards/card-type.types";
import { createAttributeElement } from "./attribute.generator";
import { addCardBackDefaultStyle, addCardFrontDefaultStyle, addStyle, createElement } from "./card-utils.generators";

export function createBlankCardBack(cardData: CardData) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    addCardBackDefaultStyle(cardElement);
    addStyle(cardElement, `
        #${cardData.id} {
            border-color: silver;
        }
    `);
    return cardElement;
}

export function createActionCardBack(cardData: ActionCardBackData = AttackCardTemplate) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    cardElement.appendChild(createElement(cardData.kost.toString(), 'kost'));
    addCardBackDefaultStyle(cardElement);
    addStyle(cardElement,`
        #${cardData.id} .kost {
            border-color: black;
            width: calc(200px * var(--scale));
            height: calc(200px * var(--scale));
            display: grid;
            place-content: center;
            background-color: yellow;
            border-radius: 50%;
            font-size: calc(4rem * var(--scale));
        }
    `);
    return cardElement;
  }

export function createTrapCardBack(cardData: TrapCardData = TrapCardTemplate) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    cardElement.appendChild(createElement(cardData.kost.toString(), 'kost'));
    addCardBackDefaultStyle(cardElement);
    addStyle(cardElement,`
        #${cardData.id} {
            border-color: purple;
        }
        #${cardData.id} .kost {
            width: calc(200px * var(--scale));
            height: calc(200px * var(--scale));
            display: grid;
            place-content: center;
            background-color: yellow;
            border-radius: 50%;
            font-size: calc(4rem * var(--scale));
        }
    `);
    return cardElement;
  }


export function createBossCardBack(cardData: BossesCardData =BossCardTemplate ) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    cardElement.appendChild(createElement('0', 'lp'));
    cardElement.appendChild(createElement(cardData.name.toString(), 'name'));
    cardElement.appendChild(createElement(cardData.actions.toString(), 'kost'));
    cardElement.appendChild(createElement(cardData.type.toString(), 'type'));
    cardElement.appendChild(createElement(cardData.defeatcondition.toString(), 'effect'));
    cardElement.appendChild(createElement(cardData.id.toString(), 'id'));
    const attributeElement = createAttributeElement(cardData);
    if(attributeElement) cardElement.appendChild(attributeElement);
    addCardFrontDefaultStyle(cardElement);
    addStyle(cardElement,`
      #${cardData.id} {
        border-color: black;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 2fr 2fr 10fr 1fr;
        grid-template-areas:
            "lp name ."
            "kost type ."
            "effect effect effect"
            ". attributes  id";
        }
    `);
    return cardElement;
  }