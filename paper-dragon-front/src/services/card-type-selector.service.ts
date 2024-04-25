import { writable, type Writable } from 'svelte/store';
import type { CardTemplate } from '../components/card-templates/card-templates.type';

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
type CardTypes = keyof typeof CARDTYPES;

export const selectedCardTemplateStore: Writable<CardTemplate> = writable();

selectedCardTemplateStore.subscribe(value => console.log(value));