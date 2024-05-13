const { getSheetData, SHEETNAMES } = require("./spread-fetch");
const { replaceWithIcons } = require("./icon");
const { sheets } = require("googleapis/build/src/apis/sheets");
const { all } = require("proxy-addr");

const CARDTYPES = {
  maneuvers: SHEETNAMES.maneuvers,
  attacks: SHEETNAMES.attacks,
  items: SHEETNAMES.items,
  traps: SHEETNAMES.traps,
  minions: SHEETNAMES.minions,
  bosses: SHEETNAMES.bosses,
  artifacts: SHEETNAMES.artifacts,
  backgrounds: SHEETNAMES.backgrounds,
  statuses: SHEETNAMES.statuses,
  conditions: SHEETNAMES.conditions,
};
let allCards;
async function getAllCards() {
  if (allCards) return allCards;
  const [
    maneuvers,
    attacks,
    items,
    traps,
    minions,
    bosses,
    artifacts,
    backgrounds,
    conditions,
    statuses,
    locations,
  ] = await Promise.all([
    getSheetData(SHEETNAMES.maneuvers),
    getSheetData(SHEETNAMES.attacks),
    getSheetData(SHEETNAMES.items),
    getSheetData(SHEETNAMES.traps),
    getSheetData(SHEETNAMES.minions),
    getSheetData(SHEETNAMES.bosses),
    getSheetData(SHEETNAMES.artifacts),
    getSheetData(SHEETNAMES.backgrounds),
    getSheetData(SHEETNAMES.conditions),
    getSheetData(SHEETNAMES.statuses),
    getSheetData(SHEETNAMES.locations),
  ]);
  allCards = {
    maneuvers,
    attacks,
    items,
    traps,
    minions,
    bosses,
    artifacts,
    backgrounds,
    conditions,
    statuses,
    locations,
  };
  return allCards;
}
let decktypes;
async function getDeckTypes() {
  if (decktypes) return decktypes;
  decktypes = await getSheetData(SHEETNAMES.decktypes);
  return decktypes;
}

let deckContentList;
async function getDecksContent() {
  if (deckContentList) return deckContentList;
  deckContentList = await getSheetData(SHEETNAMES.deckcontent);
  return deckContentList;
}

async function getDeck(id) {
  const decktypes = await getDeckTypes();
  const deckMeta = decktypes.find((deck) => deck.id === id);
  const allCards = Object.entries(await getAllCards()).flatMap(([key, value]) =>
    value.map((card) => {
      card.cardType = key;
      return card;
    })
  );
  const deckContent = (await getDecksContent()).filter(
    (deckLine) => deckLine.deckid === deckMeta.id
  );
  const resultDeck = [];
  for (let deckLine of deckContent) {
    const { cardid, amount, id, print } = deckLine;
    if (print === "FALSE") return;
    const card = allCards.find((card) => card.id === cardid);
    if (card === undefined) {
      console.error(`Can't find card with id: ${cardid}`);
      break;
    }
    for (let count = 0; count < amount; count++) {
      const newCard = {};
      const paramatersOfCards = Object.entries(card);
      for (let [key, value] of paramatersOfCards) {
        newCard[key] = await replaceWithIcons(value);
      }
      resultDeck.push({
        ...newCard,
        id: `${id}-${count + 1}`,
        deck: deckMeta,
      });
    }
  }
  return resultDeck;
}

module.exports = {
  CARDTYPES,
  getDeck,
};
