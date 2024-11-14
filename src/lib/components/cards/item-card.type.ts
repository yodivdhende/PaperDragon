import { CARDTYPES } from './card-type.types';

export const ItemCardTemplate = {
	type: CARDTYPES.item,
	name: 'name',
	id: 'id',
	image: 'image',
	kost: 1,
	uses: 2,
	effect: 'effect',
	mind: 3,
	strength: 4,
	reflex: 5,
	amount: 0,
};
export type ItemCardData = typeof ItemCardTemplate;
