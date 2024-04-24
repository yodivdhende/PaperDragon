const express = require("express");
const { authorize } = require("./services/google-auth.js");
const {
  getMetadata,
  getSheetData,
  SHEETNAMES,
} = require("./services/spread-fetch.js");
const { getDeck, CARDTYPES } = require("./services/deck-builder.js");

const PORT = 3001;

const app = express();
app.listen(PORT, () => {
  authorize().then(() => {
    console.log(`server listing to port ${PORT}`);
  });
});

app.get("/decktypes", (_, res) =>
  getSheetData(SHEETNAMES.DeckTypes).then((decklist) => res.send(decklist))
);

app.get("/cardtypes", (_, result) => result.send(Object.keys(CARDTYPES)));

app.get("/cards/:type", ({ params }, result) =>
  getSheetData(SHEETNAMES[params.type]).then((deck) => result.send(deck))
);

app.get("/deck/:deckid", ({ params }, result) =>
  getDeck(params.deckid).then((deck) => result.send(deck))
);

app.get("/meta", (_, res) => {
  getMetadata().then((result) => res.send(result));
});
