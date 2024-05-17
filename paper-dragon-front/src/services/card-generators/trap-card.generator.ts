import { TrapCardTemplate, type TrapCardData } from "../../components/cards/card-type.types";
import { createAttributeElement } from "./attribute.generator";
import { addCardFrontDefaultStyle, addStyle, createElement } from "./card-utils.generators";

export function createTrapCardFront(cardData: TrapCardData = TrapCardTemplate) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    cardElement.appendChild(createElement(cardData.kost.toString(), 'kost'));
    cardElement.appendChild(createElement(cardData.name.toString(), 'name'));
    cardElement.appendChild(createElement(cardData.effect.toString(), 'effect'));
    cardElement.appendChild(createElement(cardData.id.toString(), 'id'));
    const attributeElement = createAttributeElement(cardData);
    if(attributeElement) cardElement.appendChild(attributeElement);
    addCardFrontDefaultStyle(cardElement);
    addStyle(cardElement,`
      #${cardData.id} {
        border-color: purple;
        place-content: center;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 2fr 1fr 11fr 1fr;
        grid-template-areas:
        "kost name ."
        ". type ."
        "effect effect effect "
        ". attributes id";
      }
    `);
    return cardElement;
  }