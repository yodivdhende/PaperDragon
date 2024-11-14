import { CARDTYPES } from './card-type.types';

export const ArtifactCardTemplate = {
	type: CARDTYPES.artifacts,
	name: 'name',
	id: 'id',
	actions: 1,
	mechanics: 'mechanics',
	amount: 0,
};
export type ArtifactCardData = typeof ArtifactCardTemplate;
