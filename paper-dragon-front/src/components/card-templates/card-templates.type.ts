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
    damagetype: string;
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
    type: string;
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

export type MinionCardData = {
    cardType: typeof CardTypes.minions;
    name: string;
    id: string;
    type: string;
    lp: string;
    actions: string;
    passive: string;
    mind: string;
    strength: string;
    reflex: string;
}

export type BossesCardData = {
    cardType: typeof CardTypes.bosses;
    name: string;
    id: string;
    lp: string;
    condition: string;
    defeatcondition: string;
}

export type ArtifactCardData  = {
    cardType: typeof CardTypes.artifacts;
    name: string;
    id: string;
    actions: string;
    mechanics: string;
}

export type BackgroundCardData  = {
    cardType: typeof CardTypes.backgrounds;
    name: string;
    id: string;
    lp: string;
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
    | MinionCardData 
    | BossesCardData 
    | ArtifactCardData
    | BackgroundCardData
    ;
