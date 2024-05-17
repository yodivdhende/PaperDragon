import { ManeuverCardTemplate, type ManeuverCardData } from "../../components/cards/card-type.types";
import { createAttributeElement } from "./attribute.generator";
import { addCardFrontDefaultStyle, addStyle, createElement } from "./card-utils.generators";

export function createMeneuverCardFront(cardData: ManeuverCardData = ManeuverCardTemplate) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    const kostElement = createElement(cardData.kost.toString(), 'kost');
    const nameElement = createElement(cardData.name.toString(), 'name');
    const typeElement = createElement(cardData.type.toString(), 'type');
    const effectElement = createElement(cardData.effect.toString(), 'effect');
    const attributeElement = createAttributeElement(cardData);
    const idElement = createElement(cardData.id.toString(), 'id');
    cardElement.appendChild(kostElement);
    cardElement.appendChild(nameElement);
    cardElement.appendChild(typeElement);
    cardElement.appendChild(effectElement);
    if(attributeElement) cardElement.appendChild(attributeElement);
    cardElement.appendChild(idElement);
    addCardFrontDefaultStyle(cardElement);
    addStyle(cardElement,`
      #${cardData.id} {
        border-color: blue;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
        grid-template-areas:
        "kost name   ."
        "damage type ."
        "damageType . ."
        "effect  effect effect "
        ".  attributes id";
        }
    `);
    return cardElement;
  }