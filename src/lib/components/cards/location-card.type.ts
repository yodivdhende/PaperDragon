import { CARDTYPES } from './card-type.types';

export const LocationCardTemplate = {
	amount: 0,
	effect: 'effect',
	exloreCondition: 'exlore-condition',
	exploreTarget: 3,
	id: 'id',
	image: 'https://picsum.photos/200/300',
	locationType: "locationType",
	name: 'name',
	type: CARDTYPES.locations,
};
export type LocationCardData = typeof LocationCardTemplate;
