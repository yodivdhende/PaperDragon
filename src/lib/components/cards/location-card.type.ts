import { CARDTYPES } from './card-type.types';

export const LocationCardTemplate = {
	type: CARDTYPES.locations,
	name: 'name',
	effect: 'effect',
	id: 'id'
};
export type LocationCardData = typeof LocationCardTemplate;
