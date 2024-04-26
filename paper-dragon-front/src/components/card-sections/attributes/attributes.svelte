<script lang="ts">
  import type { Attribute } from "./attributes.type";

  export let data: Attribute = {
    mind: "M",
    strength: "S",
    reflex: "R",
  };
</script>

<main>
  <div class="mind">{data.mind}</div>
  <div class="strength">{data.strength}</div>
  <div class="reflex">{data.reflex}</div>
</main>

<style>
  main {
    display: flex;
    height: 100%;
  }
  div {
    width: 100%;
    padding: auto;
  }
  .mind {
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: #39f;
  }
  .strength {
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: #e74c3c;
  }
  .reflex {
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: #3c3;
  }
</style>
