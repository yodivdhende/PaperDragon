import { ATTRIBUTES } from '../card-sections/attributes/attributes.type';
import { CARDTYPES } from './card-type.types';

export const TrapCardTemplate = {
	type: CARDTYPES.trap,
	name: 'name',
	id: 'id',
	level: 1,
	kost: 1,
	effect: 'effect',
	attributes: [ATTRIBUTES.mind, ATTRIBUTES.strength, ATTRIBUTES.reflex, ATTRIBUTES.void],
	amount: 0
};
export type TrapCardData = typeof TrapCardTemplate;
