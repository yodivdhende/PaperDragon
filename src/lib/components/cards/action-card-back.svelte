<script lang="ts">
  import type { ActionCardBackData } from "./card-type.types";

  export let card: ActionCardBackData;
</script>

<main class="card">
  <div class="kost">{card.kost}</div>
</main>

<style>
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
