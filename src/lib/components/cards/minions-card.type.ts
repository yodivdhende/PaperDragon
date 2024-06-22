import { CARDTYPES } from "./card-type.types";

export const MinionCardTemplate = {
    cardType: CARDTYPES.minions,
    name: "name",
    id: "id",
    type: "type",
    lp: 10,
    actions: 1,
    passive: "passive",
    mind: 2,
    strength: 3,
    reflex: 4,
}
export type MinionCardData = typeof MinionCardTemplate;