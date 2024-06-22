import { CARDTYPES } from "./card-type.types";

export const BackgroundCardTemplate = {
    cardType: CARDTYPES.backgrounds,
    name: "name",
    id: "id",
    lp: 10,
    mind: 1,
    strength: 2,
    reflex: 3,
}
export type BackgroundCardData = typeof BackgroundCardTemplate;