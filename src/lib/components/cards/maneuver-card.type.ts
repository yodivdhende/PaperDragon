import { CARDTYPES } from './card-type.types';

export const ManeuverCardTemplate = {
	type: CARDTYPES.maneuver,
	name: 'name',
	id: 'id',
	level: 1,
	image: 'image',
	kost: 1,
	effect: 'effect',
	mind: 2,
	strength: 3,
	reflex: 4,
	amount: 0,
};
export type ManeuverCardData = typeof ManeuverCardTemplate;
