import { CARDTYPES } from "./card-type.types";

export const ManeuverCardTemplate = {
    cardType: CARDTYPES.maneuver,
    name: "name",
    id: "id",
    level: 1,
    image: "image",
    type: "type",
    kost: 1,
    effect: "effect",
    mind: 2,
    strength: 3,
    reflex: 4,
}
export type ManeuverCardData = typeof ManeuverCardTemplate;