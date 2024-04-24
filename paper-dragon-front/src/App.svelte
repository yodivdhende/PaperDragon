<script lang="ts">
  import CardTemplateSelector from './components/card-template-selector.svelte';
  import Card from "./components/card-templates/card.svelte";
  import { selectedCardTemplateStore } from './services/card-type-selector.service';

  $: card = {
    template: $selectedCardTemplateStore
  }
</script>

<main>
  <div class="card">
    <Card {card}></Card>
  </div>
  <div class="options">
    <CardTemplateSelector/>
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 100px;
    justify-content: center;
    align-content: center;
  }

  .card {
    --width: 500px;
    width: var(--width);
    height: calc(var(--width) * 1.39);
  }
</style>
