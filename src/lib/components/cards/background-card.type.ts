import { ATTRIBUTES } from '../card-sections/attributes/attributes.type';
import { CARDTYPES } from './card-type.types';

export const BackgroundCardTemplate = {
	amount: 0,
	attributes: [
		ATTRIBUTES.mind,
		ATTRIBUTES.strength,
		ATTRIBUTES.reflex,
		ATTRIBUTES.luck,
		ATTRIBUTES.trouble
	],
	effect: 'effect',
	id: 'id',
	lp: 10,
	mind: 1,
	name: 'name',
	reflex: 3,
	strength: 2,
	type: CARDTYPES.backgrounds
};
export type BackgroundCardData = typeof BackgroundCardTemplate;
