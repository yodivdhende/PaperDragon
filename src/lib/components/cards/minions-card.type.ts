import { CARDTYPES } from './card-type.types';

export const MinionCardTemplate = {
	type: CARDTYPES.minions,
	name: 'name',
	id: 'id',
	lp: 10,
	actions: 1,
	passive: 'passive',
	mind: 2,
	strength: 3,
	reflex: 4,
	amount: 0,
};
export type MinionCardData = typeof MinionCardTemplate;
