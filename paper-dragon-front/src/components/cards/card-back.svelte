<script lang="ts">
  import { getBackCardElement } from "../../services/card-generator";
  import type { CardData } from "./card-type.types";

  export let card: CardData;
  let mainElement: HTMLElement;
  $: renderElement(mainElement, getBackCardElement(card) as HTMLElement);

  function renderElement(
    container: HTMLElement | undefined,
    element: HTMLElement | undefined
  ) {
    if (container == null) return;
    if (element == null) return;
    container.innerHTML = "";
    container.appendChild(element);
  }
</script>

<main bind:this={mainElement}></main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>
