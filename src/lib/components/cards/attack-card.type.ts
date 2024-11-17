import { ATTRIBUTES } from '../card-sections/attributes/attributes.type';
import { CARDTYPES } from './card-type.types';

export const AttackCardTemplate = {
	type: CARDTYPES.attack,
	name: 'name',
	id: 'id',
	level: 1,
	image: 'image',
	attackType: 'type',
	kost: 2,
	effect: 'effect',
	damage: 3,
	damageType: 'DT',
	attributes: [ATTRIBUTES.mind, ATTRIBUTES.strength, ATTRIBUTES.reflex, ATTRIBUTES.void],
	amount: 1
};

export type AttackCardData = typeof AttackCardTemplate;
