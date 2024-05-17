import { ArtifactCardTemplate, type ArtifactCardData } from "../../components/cards/card-type.types";
import { addCardFrontDefaultStyle, addStyle, createElement } from "./card-utils.generators";

export function createArtifactCardFront(cardData: ArtifactCardData = ArtifactCardTemplate) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardData.id;
    cardElement.appendChild(createElement(cardData.actions.toString(), 'kost'));
    cardElement.appendChild(createElement(cardData.name.toString(), 'name'));
    cardElement.appendChild(createElement(cardData.mechanics.toString(), 'effect'));
    cardElement.appendChild(createElement(cardData.id.toString(), 'id'));
    addCardFrontDefaultStyle(cardElement);
    addStyle(cardElement,`
      #${cardData.id} {
        border-color: black;
        place-content: center;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 2fr 12fr 1fr;
        grid-template-areas:
        "kost  name ."
        "effect effect effect"
        ". . id";
        }
    `);
    return cardElement;
  }