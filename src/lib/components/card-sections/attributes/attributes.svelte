<script lang="ts">
  import type { Attribute } from "./attributes.type";
  import brain from "$lib/assets/icons/brain.png";
  import biceps from "$lib/assets/icons/biceps.png";
  import sprint from "$lib/assets/icons/sprint.png";
	import Value from "$lib/components/value.svelte";
  

  export let card: Attribute;
  function showAttributes() {
    return card.mind != null && card.strength != null && card.reflex != null;
  }
</script>

{#if showAttributes()}
  <main>
    <div class="mind">
      <Value value={card.mind}  />
      <img src={brain} />
    </div>
    <div class="strength">
      <Value value={card.strength}  />
      <img src={biceps} />
    </div>
    <div class="reflex">
      <Value value={card.reflex}  />
      <img src={sprint} />
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
