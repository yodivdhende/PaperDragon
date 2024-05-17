<script lang="ts">
  import { type CardData } from "./card-type.types";
  import { getFrontCardElement } from "../../services/card-generator";

  export let card: CardData;
  let mainElement: HTMLElement;
  $: renderElement(mainElement, getFrontCardElement(card));

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
