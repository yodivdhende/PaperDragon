import { CARDTYPES } from "./card-type.types";

export const TrapCardTemplate = {
    cardType: CARDTYPES.trap,
    name: 'name',
    id: 'id',
    level: 1,
    kost: 1,
    effect: 'effect',
    mind: 2,
    strength: 3,
    reflex: 4,
}
export type TrapCardData = typeof TrapCardTemplate;