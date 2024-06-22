import { CARDTYPES } from "./card-type.types";

export const AttackCardTemplate = {
    cardType: CARDTYPES.attack,
    name: "name",
    id: "id",
    level: 1,
    image: "image",
    type: "type",
    kost: 2,
    effect: "effect",
    damage: 3,
    damagetype: "DT",
    mind: 4,
    strength: 5,
    reflex: 6,
}
export type AttackCardData = typeof AttackCardTemplate;