export const CardTypes = {
    actionBack: "actionBack",
    attack: "attacks",
    maneuver: "maneuvers",
    item: "items",
    status: "statuses",
    condition: "conditions",
} as const

export type CardTemplate = typeof CardTypes[keyof typeof CardTypes]

export type ActionBackCardData = {
    cardType: typeof CardTypes.actionBack;
    kost: string;
}

export type AttackCardData = {
    cardType: typeof CardTypes.attack;
    name: string;
    id: string;
    type: string;
    image: string;
    kost: string;
    effect: string;
    damage: string;
    damageType: string;
    mind: string;
    strength: string;
    reflex: string;
}

export type ManeuverCardData = {
    cardType: typeof CardTypes.maneuver;
    name: string;
    id: string;
    type: string;
    image: string;
    kost: string;
    effect: string;
    mind: string;
    strength: string;
    reflex: string;
}

export type ItemCardData = {
    cardType: typeof CardTypes.item;
    name: string;
    id: string;
    type: string;
    image: string;
    kost: string;
    effect: string;
    mind: string;
    strength: string;
    reflex: string;
}

export type StatusCardData = {
    cardType: typeof CardTypes.status;
    name: string;
    id: string;
    image: string;
    effect: string;
}


export type ConditionCardData = {
    cardType: typeof CardTypes.condition;
    name: string;
    id: string;
    type: string;
    image: string;
    kost: string;
    effect: string;
    mind: string;
    strength: string;
    reflex: string;
}

export type CardData = ActionBackCardData
    | AttackCardData
    | ManeuverCardData
    | ItemCardData
    | StatusCardData
    | ConditionCardData
    ;
