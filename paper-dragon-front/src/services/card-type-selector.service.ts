import { derived, writable, type Writable } from 'svelte/store';
import { CardTypes, getDefaultTemplate, type CardType } from '../components/card-templates/card-type.types';

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
  maneuvers: SHEETNAMES.maneuvers,
  attacks: SHEETNAMES.attacks,
  items: SHEETNAMES.items,
  traps: SHEETNAMES.traps,
  minions: SHEETNAMES.minions,
  bosses: SHEETNAMES.bosses,
  artifacts: SHEETNAMES.artifacts,
  backgrounds: SHEETNAMES.backgrounds,
  statuses: SHEETNAMES.statuses,
  conditions: SHEETNAMES.conditions,
} as const;

export const CARDSIDE= {
  front: "Front", 
  back: "Back",
} as const
export type CardSide = typeof CARDSIDE[keyof typeof CARDSIDE];

export const selectedCardTypeStore: Writable<CardType> = writable(CardTypes.trap);
export const selectedCardSideStore: Writable<CardSide> = writable("Back");
export const selectedDefaulCardTemplateStore = derived( selectedCardTypeStore, (selected) => getDefaultTemplate(selected)  )

