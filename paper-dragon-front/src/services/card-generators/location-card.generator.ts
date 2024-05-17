import { LocationCardTemplate, type LocationCardData } from "../../components/cards/card-type.types";
import { addCardFrontDefaultStyle, addStyle, createElement } from "./card-utils.generators";

export function createLocationCardFront(cardData: LocationCardData= LocationCardTemplate) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    cardElement.appendChild(createElement(cardData.name.toString(), 'name'));
    cardElement.appendChild(createElement(cardData.effect.toString(), 'effect'));
    cardElement.appendChild(createElement(cardData.id.toString(), 'id'));
    addCardFrontDefaultStyle(cardElement);
    addStyle(cardElement,`
      #${cardData.id} {
        border-color: green;
        place-content: center;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 2fr 12fr 1fr;
        grid-template-areas:
        ". name ."
        "effect effect effect"
        ". . id";
        }
    `);
    return cardElement;
  }