import { CARDTYPES } from "./card-type.types";

export const ConditionCardTemplate = {
    cardType: CARDTYPES.condition,
    name: "name",
    id: "id",
    type: "type",
    icon: "icon",
    kost: 1,
    effect: "effect",
    mind: 2,
    strength: 3,
    reflex: 4,
}
export type ConditionCardData = typeof ConditionCardTemplate;