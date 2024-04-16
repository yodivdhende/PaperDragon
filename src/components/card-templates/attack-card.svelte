<script lang="ts">
    import { CardTemplates, type AttackCardData } from "./card-templates.type";

    export let data: AttackCardData = {
        template: CardTemplates.attack,
        name: "name",
        id: "id",
        type: "type",
        kost: "kost",
        effect: "effect",
        damage: "dmg",
        damageType: "dmg-type",
        mind: "M",
        strength: "S",
        reflex: "R",
    };
</script>

<main>
    <div class="kost">{data.kost}</div>
    <div class="name">{data.name}</div>
    <div class="damage">{data.damage}</div>
    <div class="type"><em>{data.type}</em></div>
    <div class="damageType">{data.damageType}</div>
    <div class="effect">{data.effect}</div>
    <div class="mind">{data.mind}</div>
    <div class="strength">{data.strength}</div>
    <div class="reflex">{data.reflex}</div>
    <div class="id">{data.id}</div>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
        border: 10px solid orange;
        border-radius: 20px;
        background-color: white;
        color: black;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
        grid-template-areas:
            "kost name name name  ."
            "damage type type type ."
            "damageType . . . ."
            "effect effect effect effect effect "
            ". mind strength reflex id";
    }
    .kost {
        grid-area: kost;
        display: grid;
        justify-content: center;
        align-content: center;
        background-color: yellow;
        border-radius: 50%;
        font-size: 2rem;
    }
    .name {
        grid-area: name;
        display: grid;
        justify-content: center;
        align-content: center;
        font-size: 2rem;
        font-weight: bolder;
        border-bottom: 3px solid black;
    }
    .damage {
        grid-area: damage;
        display: grid;
        justify-content: center;
        align-content: center;
        font-weight: bolder;
        border-radius: 50% 50% 0 0;
        background-color: red;
    }
    .type {
        grid-area: type;
        display: grid;
        justify-content: center;
        align-content: center;
    }
    .damageType {
        grid-area: damageType;
        display: grid;
        justify-content: center;
        align-content: center;
        border-radius: 0 0 100% 100%;
        background-color: red;
    }
    .effect {
        grid-area: effect;
        padding-top: 2rem;
    }
    .mind {
        grid-area: mind;
        display: grid;
        justify-content: center;
        align-content: center;
        background-color: #39f;
    }
    .strength {
        grid-area: strength;
        display: grid;
        justify-content: center;
        align-content: center;
        background-color: #e74c3c;
    }
    .reflex {
        grid-area: reflex;
        display: grid;
        justify-content: center;
        align-content: center;
        background-color: #3c3;
    }
    .id {
        grid-area: id;
        display: grid;
        justify-content: end;
        align-content: end;
    }
</style>
