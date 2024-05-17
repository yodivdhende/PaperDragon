import { CARDTYPES, isActionCard, type CardData } from "../components/cards/card-type.types"; import { createArtifactCardFront } from "./card-generators/artifact-card.generator"; import { createAttackCardFront } from "./card-generators/attack-card.generator";
import { createActionCardBack, createBlankCardBack, createBossCardBack, createTrapCardBack } from "./card-generators/back-card.generator";
import { createBackgroundCardFront } from "./card-generators/background-card.generator";
import { createBossCardFront } from "./card-generators/boss-card.generator";
import { addStyle } from "./card-generators/card-utils.generators";
import { createConditionCardFront } from "./card-generators/condition-card.generator";
import { createItemCardFront } from "./card-generators/item-card.generator";
import { createLocationCardFront } from "./card-generators/location-card.generator";
import { createMeneuverCardFront } from "./card-generators/maneuver-card-generator";
import { createMinionCardFront } from "./card-generators/minion-card.generator";
import { createStatusCardFront } from "./card-generators/status-card.generator";
import { createTrapCardFront } from "./card-generators/trap-card.generator";
import type { CardSide } from "./card-selector.service";
import type { Deck } from "./deck.service";

export function getFrontCardElement(card: CardData) {
  if(card.cardType === CARDTYPES.attack) return createAttackCardFront(card);
  if(card.cardType === CARDTYPES.maneuver) return createMeneuverCardFront(card);
  if(card.cardType === CARDTYPES.item) return createItemCardFront(card);
  if(card.cardType === CARDTYPES.trap) return createTrapCardFront(card);
  if(card.cardType === CARDTYPES.status) return createStatusCardFront(card);
  if(card.cardType === CARDTYPES.condition) return createConditionCardFront(card);
  if(card.cardType === CARDTYPES.minions) return createMinionCardFront(card);
  if(card.cardType === CARDTYPES.bosses) return createBossCardFront(card);
  if(card.cardType === CARDTYPES.artifacts) return createArtifactCardFront(card);
  if(card.cardType === CARDTYPES.backgrounds) return createBackgroundCardFront(card);
  if(card.cardType === CARDTYPES.locations) return createLocationCardFront(card);
}

export function getBackCardElement(card: CardData) {
  if(card.cardType === CARDTYPES.trap) return createTrapCardBack(card);
  if(card.cardType === CARDTYPES.bosses) return createBossCardBack(card);
  if(isActionCard(card)) return createActionCardBack(card);
  return createBlankCardBack(card);
}

export function getCardElement(card: CardData, side: CardSide) {
  if(side === 'Front')  return getFrontCardElement(card);
  if(side === 'Back')  return getBackCardElement(card);
}

export function getDeckElement(deck: Deck, face: CardSide) {
  const deckElement = document.createElement('div');
  deckElement.classList.add('deck');
  deckElement.id = deck.id;
    deck.cards.forEach(card => {
      const cardElement = getCardElement(card, face);
      if(cardElement) deckElement.appendChild(cardElement);
    });
  addStyle(deckElement, `
    .deck {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  `)
  return deckElement;
}

