<script lang="ts">
  import type { ActionCardBackData } from "./card-type.types";

  export let card: ActionCardBackData;
</script>

<main>
  <div class="kost">{card.kost}</div>
</main>

<style>
  main {
    --border-size: calc(10px * var(--scale));
    width: calc(100% - var(--border-size) *2 );
    height: calc(100% - var(--border-size)* 2);
    outline: var(--border-size) solid yellow;
    border-radius: 20px;
    background-color: white;
    color: black;
    display: grid;
    place-content: center;
  }
  .kost {
    width: calc(200px * var(--scale));
    height: calc(200px * var(--scale));
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: yellow;
    border-radius: 50%;
    font-size: calc(4rem * var(--scale));
  }
</style>
