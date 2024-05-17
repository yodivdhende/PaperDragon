<script lang="ts">
  import Display from "./components/display.svelte";
  import { currentDisplayStore } from "./services/display-type-selector.service";
  import Options from "./components/options.svelte";
</script>

<main>
  <Display displayType={$currentDisplayStore} />
  <Options />
</main>

<template>
  <style id="card-front">
  </style>
</template>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
</style>
