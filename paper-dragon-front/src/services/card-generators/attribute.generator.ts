import type { Attributes } from "../../components/card-sections/attributes/attributes.type";
import { addStyle, createElement } from "./card-utils.generators";

  export function createAttributeElement(data?: Attributes) {
      if(data === undefined)  return;
      const {mind, strength, reflex} =data;
      if( mind === undefined || strength === undefined || reflex=== undefined ) return;
      const attributeElement = document.createElement('div');
      attributeElement.classList.add('attributes');
      const mindElement = createElement(`${mind} <img src="src/assets/icons/brain.png" />`, 'mind');
      const strengthElement = createElement(`${strength} <img src="src/assets/icons/biceps.png" />`, 'strength');
      const reflexElement = createElement(`${reflex} <img src="src/assets/icons/sprint.png" />`, 'reflex');
    attributeElement.appendChild(mindElement);
    attributeElement.appendChild(strengthElement);
    attributeElement.appendChild(reflexElement);
       addStyle(attributeElement,`
        .attributes {
          display: flex;
          height: 100%;
        }
        .attributes img{
          width: 2em;
          height: 2em;
        }
        div {
          width: 100%;
          padding: auto;
        }
        .mind {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: .5em;
          background-color: #39f;
        }
        .strength {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: .5em;
          background-color: #e74c3c;
      }
      .reflex {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: .5em;
        background-color: #3c3;
      }
    `);
    return attributeElement;
}