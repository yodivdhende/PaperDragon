import { CARDTYPES } from "./card-type.types";

export const BossCardTemplate = {
    cardType: CARDTYPES.bosses,
    name: "name",
    type: "type",
    id: "id",
    lp: 10,
    actions: '2p+2',
    effect: "effect",
    defeatcondition: "defeatcondition",
    mind: 2,
    strength: 3,
    reflex: 4,
}
export type BossesCardData = Omit<typeof BossCardTemplate, 'mind' | 'strength' | 'reflex'> & {
    mind?: number;
    strength?: number;
    reflex?: number;
}