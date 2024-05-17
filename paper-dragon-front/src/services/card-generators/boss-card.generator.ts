import { BossCardTemplate, type BossesCardData } from "../../components/cards/card-type.types";
import { createAttributeElement } from "./attribute.generator";
import { addCardFrontDefaultStyle, addStyle, createElement } from "./card-utils.generators";

export function createBossCardFront(cardData: BossesCardData =BossCardTemplate ) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    cardElement.appendChild(createElement(cardData.lp.toString(), 'lp'));
    cardElement.appendChild(createElement(cardData.actions.toString(), 'kost'));
    cardElement.appendChild(createElement(cardData.name.toString(), 'name'));
    cardElement.appendChild(createElement(cardData.type.toString(), 'type'));
    cardElement.appendChild(createElement(cardData.effect.toString(), 'effect'));
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
          ". attributes id";
        }
    `);
    return cardElement;
  }