import { CARDTYPES } from './card-type.types';

export const TrapCardTemplate = {
	type: CARDTYPES.trap,
	name: 'name',
	id: 'id',
	level: 1,
	kost: 1,
	effect: 'effect',
	mind: 2,
	strength: 3,
	reflex: 4,
	amount: 0,
};
export type TrapCardData = typeof TrapCardTemplate;
