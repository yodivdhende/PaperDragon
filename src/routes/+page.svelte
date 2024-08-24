<script>
	import { getAllCards } from "$lib/server/card.server";
	import { migrateCards } from "$lib/server/mirgration.server";

    getAllCards().then((cards) => {
        console.log(cards);
        // return migrateCards(cards);
    });
</script>
<h1>Home</h1>

