import { ATTRIBUTES } from '../card-sections/attributes/attributes.type';
import { CARDTYPES } from './card-type.types';

export const ItemCardTemplate = {
	type: CARDTYPES.item,
	name: 'name',
	id: 'id',
	image: 'image',
	kost: 1,
	uses: 2,
	effect: 'effect',
	attributes: [ATTRIBUTES.mind, ATTRIBUTES.strength, ATTRIBUTES.reflex, ATTRIBUTES.void],
	amount: 0
};
export type ItemCardData = typeof ItemCardTemplate;
