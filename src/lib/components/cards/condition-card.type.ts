import { CARDTYPES } from './card-type.types';

export const ConditionCardTemplate = {
	type: CARDTYPES.condition,
	name: 'name',
	id: 'id',
	icon: 'icon',
	kost: 1,
	effect: 'effect',
	mind: 2,
	strength: 3,
	reflex: 4
};
export type ConditionCardData = typeof ConditionCardTemplate;
