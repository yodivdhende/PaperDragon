export const CardTypes = {
    actionBack: "actionBack",
    attack: "attacks",
    maneuver: "maneuvers",
    item: "items",
    status: "statuses",
    condition: "conditions",
    minions: "minions",
    bosses: "bosses",
    artifacts: "artifacts",
    backgrounds: "backgrounds",
} as const

export type CardType = typeof CardTypes[keyof typeof CardTypes]

const ActionBackCardTemplate = {
    template: CardTypes.actionBack,
    kost: 1,
}
export type ActionBackCardData = typeof ActionBackCardTemplate;

const AttackCardTemplate = {
    cardType: CardTypes.attack,
    name: "name",
    id: "id",
    image: "image",
    type: "type",
    kost: 1,
    effect: "effect",
    damage: 2,
    damagetype: "DT",
    mind: 3,
    strength: 4,
    reflex: 5,
}
export type AttackCardTemplate = typeof AttackCardTemplate;

const ManeuverCardTemplate = {
    cardType: CardTypes.maneuver,
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
export type ManeuverCardData = typeof ManeuverCardTemplate;


const ItemCardTemplate = {
    cardType: CardTypes.item,
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


const StatusCardTemplate = {
    cardType: CardTypes.status,
    name: "name",
    image: "test",
    id: "id",
    type: "type",
    effect: "effect",
}
export type StatusCardData = typeof StatusCardTemplate;

const ConditionCardTemplate = {
    cardType: CardTypes.condition,
    name: "name",
    id: "id",
    type: "type",
    image: "image",
    kost: "kost",
    effect: "effect",
    mind: 1,
    strength: 2,
    reflex: 3,
}
export type ConditionCardData = typeof ConditionCardTemplate;


const MinionCardTemplate = {
    cardType: CardTypes.minions,
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

const BossCardTemplate = {
    cardType: CardTypes.bosses,
    name: "name",
    id: "id",
    lp: 10,
    condition: "condition",
    defeatcondition: "defeatcondition",
}
export type BossesCardData = typeof BossCardTemplate;

const ArtifactCardTemplate = {
    cardType: CardTypes.artifacts,
    name: "name",
    id: "id",
    actions: 1,
    mechanics: "mechanics",
}
export type ArtifactCardData = typeof ArtifactCardTemplate;

const BackgroundCardTemplate = {
    cardType: CardTypes.backgrounds,
    name: "name",
    id: "id",
    lp: 10,
    mind: 1,
    strength: 2,
    reflex: 3,
}
export type BackgroundCardData = typeof BackgroundCardTemplate;

export function getDefaultTemplate(cardType: CardType): CardData {
    switch (cardType) {
        case (CardTypes.actionBack): return ActionBackCardTemplate;
        case (CardTypes.attack): return AttackCardTemplate;
        case (CardTypes.maneuver): return ManeuverCardTemplate;
        case (CardTypes.item): return ItemCardTemplate;
        case (CardTypes.status): return StatusCardTemplate;
        case (CardTypes.condition): return ConditionCardTemplate;
        case (CardTypes.minions): return MinionCardTemplate;
        case (CardTypes.bosses): return BossCardTemplate;
        case (CardTypes.artifacts): return ArtifactCardTemplate;
        case (CardTypes.backgrounds): return BackgroundCardTemplate;
    }
}


export type CardData = ActionBackCardData
    | AttackCardTemplate
    | ManeuverCardData
    | ItemCardData
    | StatusCardData
    | ConditionCardData
    | MinionCardData
    | BossesCardData
    | ArtifactCardData
    | BackgroundCardData
    ;

