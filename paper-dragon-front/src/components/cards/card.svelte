<script lang="ts">
  import { getCardElement } from "../../services/card-generator";
  import { selectedCardSideStore } from "../../services/card-selector.service";
  import type { CardData } from "./card-type.types";

  export let card: CardData;
  let mainElement: HTMLElement;
  $: renderElement(mainElement, getCardElement(card, $selectedCardSideStore));

  function renderElement(container?: HTMLElement, element?: HTMLElement) {
    if (container == null) return;
    if (element == null) return;
    container.innerHTML = "";
    container.appendChild(element);
  }
</script>

<main bind:this={mainElement}></main>
