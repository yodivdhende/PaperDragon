const { getSheetData, SHEETNAMES } = require("./spread-fetch");

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
  return deckContent.flatMap(({ cardid, amount, id, print }) => {
    if (print === "FALSE") return [];
    const card = allCards.find((card) => card.id === cardid);
    const results = [];
    for (let count = 0; count < amount; count++) {
      results.push({
        ...card,
        id: `${id}-${count + 1}`,
        deck: deckMeta,
      });
    }
    return results;
  });
}

module.exports = {
  getDeck,
};
