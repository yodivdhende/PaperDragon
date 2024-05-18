<script lang="ts">
  import Display from "./components/display.svelte";
  import { currentDisplayStore } from "./services/display-type-selector.service";
  import DisplayOptions from "./components/display-options.svelte";
</script>

<main>
  <Display displayType={$currentDisplayStore} />
  <DisplayOptions />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
</style>
