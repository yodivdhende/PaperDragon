export function createElement(value: string, className: string, tag: string = 'div') {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    newElement.innerHTML = value;
    return newElement;
}

export function addStyle(element: HTMLElement, style:string){
    const css = document.createElement('style');
    css.innerText = style;
    element.appendChild(css);
    return element;
}

export function addCardFrontDefaultStyle(element: HTMLElement) {
    const style = document.createElement('style');
    style.innerText = CARDFRONTDEFAULTSTYLE;
    element.appendChild(style);
    return element;
}

export function addCardBackDefaultStyle(element: HTMLElement) {
  const style = document.createElement('style');
  style.innerText = `
    .card {
      --scale: 1;
      --border-size: calc(10px * var(--scale));
      --width: calc(500px * var(--scale));
      width: var(--width);
      height: calc(var(--width) * 1.39);
      border: var(--border-size) solid;
      border-radius: 20px;
      background-color: white;
      color: black;
      display: grid;
      place-content: center;
  `;
  element.appendChild(style);
  return element;
}

const CARDFRONTDEFAULTSTYLE = `
      .card {
        --scale: 1;
        --outline-width: calc(10px * var(--scale));
        --width: calc(500px * var(--scale));
        width: var(--width);
        height: calc(var(--width) * 1.39);
        border: var(--outline-width) solid;
        border-radius: calc(20px * var(--scale));
        background-color: white;
        color: black;
        font-size: calc(1rem * var(--scale));
        display: grid;
      }
      .kost {
        grid-area: kost;
        display: grid;
        place-content: center;
        background-color: yellow;
        border-radius: 50%;
        font-size: 2em;
      }
      .name {
        grid-area: name;
        display: grid;
        place-content: center;
        font-size: 2em;
        font-weight: bolder;
        border-bottom: 3px solid black;
      }
      .damage {
        grid-area: damage;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        font-size: 2em;
        font-weight: bolder;
        background-color: red;
      }
      .type {
        grid-area: type;
        display: grid;
        align-content: start;
        justify-content: center;
      }
      .effect {
        --padding-width: 1em;
        grid-area: effect;
        width: calc(100%  - var(--padding-width) * 2);
        padding: 2em var(--padding-width);
        font-size: 1.2em;
      }
      .damage > img {
        width: 1em;
        height: 1em;
        display: inline;
      }
      .effect > img {
        width: 2em;
        height: 2em;
        display: inline;
      }
      .attributes {
        grid-area: attributes;
      }
      .id {
        grid-area: id;
        font-size: 0.8em;
        display: grid;
        justify-content: center;
        align-content: end;
      }
      .lp {
        grid-area: lp;
        font-size: 2em;
        display: grid;
        place-content: center;
        background-color: lightcoral;
      }
      .actions {
        grid-area: actions;
        font-size: 2em;
        text-align: center;
        background-color: yellow;
      }
      .image {
        grid-area: image;
      }
      .image img {
        width: 100%;
        height: 100%;
      }
`