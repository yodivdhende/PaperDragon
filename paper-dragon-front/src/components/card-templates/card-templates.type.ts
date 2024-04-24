export const CardTemplates = {
    actionBack: "actionBack",
    attack: "attacks",
    maneuver: "maneuvers",
    item: "items",
    status: "statuses",
    condition: "conditions",
} as const

export type CardTemplate = typeof CardTemplates[keyof typeof CardTemplates]

export type ActionBackCardData = {
    template: typeof CardTemplates.actionBack;
    kost: string;
}

export type AttackCardData = {
    template: typeof CardTemplates.attack;
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
    template: typeof CardTemplates.maneuver;
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
    template: typeof CardTemplates.item;
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
    template: typeof CardTemplates.status;
    name: string;
    id: string;
    image: string;
    effect: string;
}


export type ConditionCardData = {
    template: typeof CardTemplates.condition;
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
