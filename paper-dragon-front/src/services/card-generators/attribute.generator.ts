import type { Attributes } from "../../components/card-sections/attributes/attributes.type";
import { addStyle, createElement } from "./card-utils.generators";

  export function createAttributeElement(data?: Attributes) {
      if(data === undefined)  return;
      const {mind, strength, reflex} =data;
      if( mind === undefined || strength === undefined || reflex=== undefined ) return;
      const attributeElement = document.createElement('div');
      attributeElement.classList.add('attributes');
      const mindElement = createElement(mind.toString(), 'mind');
      const strengthElement = createElement(strength.toString(), 'strength');
      const reflexElement = createElement(reflex.toString(), 'reflex');
    attributeElement.appendChild(mindElement);
    attributeElement.appendChild(strengthElement);
    attributeElement.appendChild(reflexElement);
       addStyle(attributeElement,`
        .attributes {
          display: flex;
          height: 100%;
        }
        div {
          width: 100%;
          padding: auto;
        }
        .mind {
          display: grid;
          justify-content: center;
          align-content: center;
          background-color: #39f;
        }
        .strength {
          display: grid;
          justify-content: center;
          align-content: center;
          background-color: #e74c3c;
      }
      .reflex {
        display: grid;
        justify-content: center;
        align-content: center;
        background-color: #3c3;
      }
    `);
    return attributeElement;
}