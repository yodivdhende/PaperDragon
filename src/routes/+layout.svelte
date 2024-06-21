<script>
    import GoogleApi from '$lib/components/google-api.svelte';
    import '../app.css';
</script>
<main>
    <nav>
        <a href="/template/main">Template</a>
        <a href="/deck">Deck</a>
        <a href="/allcards">All Cards</a>
    </nav>
    <slot />
</main>
<GoogleApi />

<style>
   main {
    display: flex;
    flex-direction: column;
   } 

   nav {
    display: flex;
    flex-direction: row;
   }
</style>