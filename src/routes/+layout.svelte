<script>
import GoogleApi from '$lib/components/google-api.svelte';
    import '../app.css';
</script>
<main>
    <header>
        <nav>
            <a href="/template/main">Template</a>
            <a href="/deck/main">Deck</a>
            <a href="/allcards">All Cards</a>
        </nav>
    </header>
    <slot />
</main>
<GoogleApi />

<style>
   main {
    display: flex;
    flex-direction: column;
   } 

   header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   }

   nav {
    display: flex;
    flex-direction: row;
   }
</style>