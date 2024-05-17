import { BackgroundCardTemplate, type BackgroundCardData } from "../../components/cards/card-type.types";
import { createAttributeElement } from "./attribute.generator";
import { addCardFrontDefaultStyle, addStyle, createElement } from "./card-utils.generators";

export function createBackgroundCardFront(cardData: BackgroundCardData= BackgroundCardTemplate) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.appendChild(createElement(cardData.lp.toString(), 'lp'));
    cardElement.appendChild(createElement(cardData.name.toString(), 'name'));
    cardElement.appendChild(createElement(cardData.id.toString(), 'id'));
    const attributeElement = createAttributeElement(cardData);
    if(attributeElement) cardElement.appendChild(attributeElement);
    addCardFrontDefaultStyle(cardElement);
    addStyle(cardElement,`
      .card {
        border-color: black;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 2fr 1fr 11fr 1fr;
        grid-template-areas:
        "lp name ."
        ". attributes ."
        ". . ."
        ". . id";
        }
    `);
    return cardElement;
  }