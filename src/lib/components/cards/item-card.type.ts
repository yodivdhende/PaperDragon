import { CARDTYPES } from "./card-type.types";

export const ItemCardTemplate = {
    cardType: CARDTYPES.item,
    name: "name",
    id: "id",
    image: "image",
    type: "type",
    kost: 1,
    effect: "effect",
    mind: 2,
    strength: 3,
    reflex: 4,
}
export type ItemCardData = typeof ItemCardTemplate;