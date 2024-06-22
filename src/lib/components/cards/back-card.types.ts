import type { ArtifactCardData } from "./artifact-card.type";
import type { AttackCardData } from "./attack-card.type";
import type { BackgroundCardData } from "./background-card.type";
import type { CardData } from "./card-data.types";
import {  CARDTYPES } from "./card-type.types";
import type { ConditionCardData } from "./condition-card.type";
import type { ItemCardData } from "./item-card.type";
import type { LocationCardData } from "./location-card.type";
import type { ManeuverCardData } from "./maneuver-card.type";
import type { MinionCardData } from "./minions-card.type";
import type { StatusCardData } from "./status-card.type";

export type ActionCardBackData = Extract<CardData, AttackCardData
    | ManeuverCardData
    | ItemCardData
    | ConditionCardData
> ;

export function isActionCard(card: CardData): card is ActionCardBackData{ 
        switch (card.cardType) {
            case (CARDTYPES.attack):
            case (CARDTYPES.maneuver):
            case (CARDTYPES.item):
            case (CARDTYPES.condition):
                return true;
            default:
                return false;
        }
}

export type BlankCardBackData = Extract<CardData, StatusCardData
    | MinionCardData
    | ArtifactCardData
    | BackgroundCardData
    | LocationCardData
>

export function isBlankCardBack(card: CardData): card is BlankCardBackData {
        switch (card.cardType) {
            case (CARDTYPES.status):
            case (CARDTYPES.minions):
            case (CARDTYPES.artifacts):
            case (CARDTYPES.backgrounds):
            case (CARDTYPES.locations):
                return true;
            default:
                return false;
        }
}