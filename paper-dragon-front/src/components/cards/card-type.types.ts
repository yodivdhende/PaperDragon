export const SHEETNAMES = {
  decktypes: "DeckTypes",
  maneuvers: "Maneuvers",
  attacks: "Attacks",
  items: "Items",
  traps: "Traps",
  minions: "Minions",
  bosses: "Bosses",
  artifacts: "Artifacts",
  backgrounds: "Backgrounds",
  statuses: "Statuses",
  conditions: "Conditions",
  icons: "Icons",
  deckcontent: "DeckContent",
} as const;

export const CARDTYPES = {
    attack: 'attacks',
    maneuver: 'maneuvers',
    item: 'items',
    trap: 'traps',
    status: 'statuses',
    condition: 'conditions',
    minions: 'minions',
    bosses: 'bosses',
    artifacts: 'artifacts',
    backgrounds: 'backgrounds',
} as const

export type CardType = typeof CARDTYPES[keyof typeof CARDTYPES]


const AttackCardTemplate = {
    cardType: CARDTYPES.attack,
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
export type AttackCardData = typeof AttackCardTemplate;


const ManeuverCardTemplate = {
    cardType: CARDTYPES.maneuver,
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
    cardType: CARDTYPES.item,
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

const TrapCardTemplate = {
    cardType: CARDTYPES.trap,
    name: 'name',
    id: 'id',
    kost: 1,
    effect: 'effect',
    mind: 2,
    strength: 3,
    reflex: 4,
}
export type TrapCardData = typeof TrapCardTemplate;


const StatusCardTemplate = {
    cardType: CARDTYPES.status,
    name: "name",
    icon: "icon",
    id: "id",
    type: "type",
    effect: "effect",
}
export type StatusCardData = typeof StatusCardTemplate;

const ConditionCardTemplate = {
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


const MinionCardTemplate = {
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

const BossCardTemplate = {
    cardType: CARDTYPES.bosses,
    name: "name",
    type: "type",
    id: "id",
    lp: 10,
    effect: "effect",
    defeatcondition: "defeatcondition",
}
export type BossesCardData = typeof BossCardTemplate;

const ArtifactCardTemplate = {
    cardType: CARDTYPES.artifacts,
    name: "name",
    id: "id",
    actions: 1,
    mechanics: "mechanics",
}
export type ArtifactCardData = typeof ArtifactCardTemplate;

const BackgroundCardTemplate = {
    cardType: CARDTYPES.backgrounds,
    name: "name",
    id: "id",
    lp: 10,
    mind: 1,
    strength: 2,
    reflex: 3,
}
export type BackgroundCardData = typeof BackgroundCardTemplate;

export type ActionCardBackData = Extract<CardData, AttackCardData
    | ManeuverCardData
    | ItemCardData
    | ConditionCardData
> ;

export function isActionCard(card: CardData): card is ActionCardBackData{ 
        switch (card.cardType) {
            case (CARDTYPES.attack):
            case (CARDTYPES.maneuver):
            case (CARDTYPES.item):
            case (CARDTYPES.condition):
                return true;
            case (CARDTYPES.status):
            case (CARDTYPES.minions):
            case (CARDTYPES.bosses):
            case (CARDTYPES.artifacts):
            case (CARDTYPES.backgrounds):
            case (CARDTYPES.trap):
                return false;
        }
}

export type BlankCardBackData = Extract<CardData, StatusCardData
    | MinionCardData
    | ArtifactCardData
    | BackgroundCardData
>

export function isBlankCardBack(card: CardData): card is BlankCardBackData {
        switch (card.cardType) {
            case (CARDTYPES.status):
            case (CARDTYPES.minions):
            case (CARDTYPES.artifacts):
            case (CARDTYPES.backgrounds):
                return true;
            case (CARDTYPES.bosses):
            case (CARDTYPES.attack):
            case (CARDTYPES.maneuver):
            case (CARDTYPES.item):
            case (CARDTYPES.condition):
            case (CARDTYPES.trap):
                return false;
        }
}

export type CardData = AttackCardData 
    | ManeuverCardData
    | ItemCardData
    | StatusCardData
    | ConditionCardData
    | MinionCardData
    | BossesCardData
    | ArtifactCardData
    | BackgroundCardData
    | TrapCardData
    ;

export function getDefaultTemplate(cardType: CardType): CardData {
        switch (cardType) {
            case (CARDTYPES.attack): return AttackCardTemplate;
            case (CARDTYPES.maneuver): return ManeuverCardTemplate;
            case (CARDTYPES.item): return ItemCardTemplate;
            case (CARDTYPES.status): return StatusCardTemplate;
            case (CARDTYPES.condition): return ConditionCardTemplate;
            case (CARDTYPES.minions): return MinionCardTemplate;
            case (CARDTYPES.bosses): return BossCardTemplate;
            case (CARDTYPES.artifacts): return ArtifactCardTemplate;
            case (CARDTYPES.backgrounds): return BackgroundCardTemplate;
            case (CARDTYPES.trap): return  TrapCardTemplate; 
        }
}