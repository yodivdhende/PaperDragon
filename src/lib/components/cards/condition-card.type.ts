import { ATTRIBUTES } from '../card-sections/attributes/attributes.type';
import { CARDTYPES } from './card-type.types';

export const ConditionCardTemplate = {
	type: CARDTYPES.condition,
	name: 'name',
	id: 'id',
	icon: 'icon',
	kost: 1,
	effect: 'effect',
	attributes: [ATTRIBUTES.mind, ATTRIBUTES.strength, ATTRIBUTES.reflex, ATTRIBUTES.void],
	amount: 0
};
export type ConditionCardData = typeof ConditionCardTemplate;
