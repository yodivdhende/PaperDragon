<script lang="ts">
  import type { Attribute } from "./attributes.type";

  export let card: Attribute;
  function showAttributes() {
    return card.mind != null && card.strength != null && card.reflex != null;
  }
</script>

{#if showAttributes()}
  <main>
    <div class="mind">
      {card.mind}
      <img src="src/static/icons/brain.png" />
    </div>
    <div class="strength">
      {card.strength}
      <img src="src/static/icons/biceps.png" />
    </div>
    <div class="reflex">
      {card.reflex}
      <img src="src/static/icons/sprint.png" />
    </div>
  </main>
{/if}

<style>
  main {
    display: flex;
    height: 100%;
  }
  div {
    width: 100%;
    padding: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
  }
  div img {
    width: 2em;
    height: 2em;
  }
  .mind {
    background-color: #39f;
  }
  .strength {
    background-color: #e74c3c;
  }
  .reflex {
    background-color: #3c3;
  }
</style>
