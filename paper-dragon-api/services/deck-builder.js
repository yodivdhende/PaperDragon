const { getSheetData, SHEETNAMES } = require("./spread-fetch");
const { replaceWithIcons } = require("./icon");

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

async function getAllCards() {
  const [
    maneuvers,
    attacks,
    items,
    traps,
    minions,
    bosses,
    artifacts,
    backgrounds,
  ] = await Promise.all([
    getSheetData(SHEETNAMES.maneuvers),
    getSheetData(SHEETNAMES.attacks),
    getSheetData(SHEETNAMES.items),
    getSheetData(SHEETNAMES.traps),
    getSheetData(SHEETNAMES.minions),
    getSheetData(SHEETNAMES.bosses),
    getSheetData(SHEETNAMES.artifacts),
    getSheetData(SHEETNAMES.backgrounds),
  ]);
  return {
    maneuvers,
    attacks,
    items,
    traps,
    minions,
    bosses,
    artifacts,
    backgrounds,
  };
}

async function getDeck(id) {
  const deckMeta = (await getSheetData(SHEETNAMES.decktypes)).find(
    (deck) => deck.id === id
  );
  const allCards = Object.entries(await getAllCards()).flatMap(([key, value]) =>
    value.map((card) => {
      card.cardType = key;
      return card;
    })
  );
  const deckContent = (await getSheetData(SHEETNAMES.deckcontent)).filter(
    (deckLine) => deckLine.deckid === deckMeta.id
  );
  const resultDeck = [];
  for (let deckLine of deckContent) {
    const { cardid, amount, id, print } = deckLine;
    if (print === "FALSE") return;
    const card = allCards.find((card) => card.id === cardid);
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
