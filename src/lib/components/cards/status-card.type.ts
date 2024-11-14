import { CARDTYPES } from './card-type.types';

export const StatusCardTemplate = {
	type: CARDTYPES.status,
	name: 'name',
	icon: 'icon',
	id: 'id',
	effect: 'effect',
	amount: 0,
};
export type StatusCardData = typeof StatusCardTemplate;
