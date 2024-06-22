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
  locations: "Locations",
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
    locations: 'locations',
} as const

export type CardType = typeof CARDTYPES[keyof typeof CARDTYPES]

export function isCardType(cardType: string): cardType is CardType {
    return Object.values(CARDTYPES).some(type => type === cardType)
}
