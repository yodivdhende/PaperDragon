import { ArtifactCardTemplate, type ArtifactCardData } from "./artifact-card.type";
import { type AttackCardData, AttackCardTemplate } from "./attack-card.type";
import { BackgroundCardTemplate, type BackgroundCardData } from "./background-card.type";
import { BossCardTemplate, type BossesCardData } from "./boss-card.type";
import { type CardType, CARDTYPES } from "./card-type.types";
import { ConditionCardTemplate, type ConditionCardData } from "./condition-card.type";
import { ItemCardTemplate, type ItemCardData } from "./item-card.type";
import { type LocationCardData, LocationCardTemplate } from "./location-card.type";
import { ManeuverCardTemplate, type ManeuverCardData } from "./maneuver-card.type";
import { MinionCardTemplate, type MinionCardData } from "./minions-card.type";
import { StatusCardTemplate, type StatusCardData } from "./status-card.type";
import { TrapCardTemplate, type TrapCardData } from "./trap-card.type";

export type CardData = AttackCardData 
    | ManeuverCardData
    | ItemCardData
    | StatusCardData
    | ConditionCardData
    | MinionCardData
    | BossesCardData
    | ArtifactCardData
    | BackgroundCardData
    | TrapCardData
    | LocationCardData
    ;

export function getDefaultTemplate(cardType: CardType): CardData {
        switch (cardType) {
            case (CARDTYPES.attack): return AttackCardTemplate;
            case (CARDTYPES.maneuver): return ManeuverCardTemplate;
            case (CARDTYPES.item): return ItemCardTemplate;
            case (CARDTYPES.status): return StatusCardTemplate;
            case (CARDTYPES.condition): return ConditionCardTemplate;
            case (CARDTYPES.minions): return MinionCardTemplate;
            case (CARDTYPES.bosses): return BossCardTemplate;
            case (CARDTYPES.artifacts): return ArtifactCardTemplate;
            case (CARDTYPES.backgrounds): return BackgroundCardTemplate;
            case (CARDTYPES.trap): return  TrapCardTemplate; 
            case (CARDTYPES.locations): return LocationCardTemplate;
        }
}