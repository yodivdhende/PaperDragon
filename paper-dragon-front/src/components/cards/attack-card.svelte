<script lang="ts">
  import { createAttackCardFront } from "../../services/card-generators/attack-card.generator";
  import { type AttackCardData } from "./card-type.types";

  export let card: AttackCardData;
  let mainElement: HTMLElement;
  $: renderElement(mainElement, createAttackCardFront(card));

  function renderElement(
    container: HTMLElement | undefined,
    element: HTMLElement
  ) {
    if (container == null) return;
    container.appendChild(element);
  }
</script>

<main bind:this={mainElement}></main>

<style>
</style>
