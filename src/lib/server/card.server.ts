import type { CardData } from '../components/cards/card-data.types';
import Decks from '$lib/data/composite-deck.json';

export function getCards() {
	Object.values(Decks)
		.map((deck) => deck.cards)
		.flat();
}

export function getCard(id: string): CardData | undefined {
	//TODO fetch card from firstore and return;
	return;
}

// export type Card = AttackCard;
// export const CardTypes = {
// 	Attack: 'Attack',
// 	Maneuver: 'Maneuver',
// 	Artifact: 'Artifact',
// 	Background: 'Background',
// 	Item: 'Item',
// 	Trap: 'Trap',
// 	Minion: 'Minion',
// 	Boss: 'Boss'
// } as const;
// export type CardType = (typeof CardTypes)[keyof typeof CardTypes];

// export type Attribute = 'mind' | 'strength' | 'reflex' | 'void';

// export type AttackCard = {
// 	type: typeof CardTypes.Attack;
// 	id: string;
// 	name: string;
// 	image: string;
// 	kost: number;
// 	damage: number;
// 	attributes: Attribute[];
// 	level: number;
// 	damageType: string;
// 	print: boolean;
// 	effect: string;
// };

// export type ManeuverCard = {
// 	type: typeof CardTypes.Maneuver;
// 	id: string;
// 	name: string;
// 	image: string;
// 	kost: number;
// 	attributes: Attribute[];
// 	level: number;
// 	damageType: string;
// 	print: boolean;
// 	effect: string;
// };
