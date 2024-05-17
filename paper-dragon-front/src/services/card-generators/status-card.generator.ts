import { StatusCardTemplate, type StatusCardData } from "../../components/cards/card-type.types";
import { addCardFrontDefaultStyle, addStyle, createElement } from "./card-utils.generators";

export function createStatusCardFront(cardData: StatusCardData= StatusCardTemplate) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    cardElement.appendChild(createElement(cardData.name.toString(), 'name'));
    cardElement.appendChild(createElement(cardData.icon.toString(), 'image'));
    cardElement.appendChild(createElement(cardData.effect.toString(), 'effect'));
    cardElement.appendChild(createElement(cardData.id.toString(), 'id'));
    addCardFrontDefaultStyle(cardElement);
    addStyle(cardElement,`
      #${cardData.id} {
        border-color: silver;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 2fr 5fr 5fr 1fr;
        grid-template-areas:
        ". name   ."
        ". image ."
        "effect  effect effect "
        ".  . id";
      }
    `);
    return cardElement;
  }