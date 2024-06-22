import { CARDTYPES } from "./card-type.types"

export const ArtifactCardTemplate = {
    cardType: CARDTYPES.artifacts,
    name: "name",
    id: "id",
    actions: 1,
    mechanics: "mechanics",
}
export type ArtifactCardData = typeof ArtifactCardTemplate