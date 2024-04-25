<script lang="ts">
  import CardTemplateSelector from "./components/card-template-selector.svelte";
  import DisplaySelector from "./components/display-selector.svelte";
  import Display from "./components/display.svelte";
  import { currentDisplayStore } from "./services/display-type-selector.service";
</script>

<main>
  <Display displayType={$currentDisplayStore} />
  <div class="options">
    <DisplaySelector />
    <CardTemplateSelector />
  </div>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  .options {
    max-width: 200px;
  }
</style>
