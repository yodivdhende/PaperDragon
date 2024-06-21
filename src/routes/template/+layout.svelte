<script lang="ts">
    import CardSideSelector from '$lib/components/selectors/card-side-selector.svelte'
	import CardTypeSelector from '$lib/components/selectors/card-type-selector.svelte';
       
</script>
<main>
    <div class="card">
        <slot />
    </div>
    <div class="settings">
        <CardTypeSelector />
        <CardSideSelector />
    </div>
</main>
<style>
    main {
        display:flex;
        flex-direction: row;
    }
    .card {
        width:100%;
        background-color:var(--color-background);
    }
    .settings {
        max-width: 500px;
        border: 1px solid var(--color-gray) ;
    } 
</style>