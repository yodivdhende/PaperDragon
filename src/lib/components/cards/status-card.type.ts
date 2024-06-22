import { CARDTYPES } from "./card-type.types";

export const StatusCardTemplate = {
    cardType: CARDTYPES.status,
    name: "name",
    icon: "icon",
    id: "id",
    type: "type",
    effect: "effect",
}
export type StatusCardData = typeof StatusCardTemplate;