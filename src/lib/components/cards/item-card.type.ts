import { CARDTYPES } from "./card-type.types";

export const ItemCardTemplate = {
    cardType: CARDTYPES.item,
    name: "name",
    id: "id",
    image: "image",
    type: "type",
    kost: 1,
    users: 2,
    effect: "effect",
    mind: 3,
    strength: 4,
    reflex: 5,
}
export type ItemCardData = typeof ItemCardTemplate;