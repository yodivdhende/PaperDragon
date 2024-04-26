const express = require("express");
const { authorize } = require("./services/google-auth.js");
const {
  getMetadata,
  getSheetData,
  SHEETNAMES,
} = require("./services/spread-fetch.js");
const { getDeck, CARDTYPES } = require("./services/deck-builder.js");
const cors = require("cors");

const APP = express();
const PORT = 3001;

APP.use(cors());

APP.listen(PORT, () => {
  authorize().then(() => {
    console.log(`server listing to port ${PORT}`);
  });
});

APP.get("/decktypes", (_, res) =>
  getSheetData(SHEETNAMES.decktypes).then((decklist) => res.send(decklist))
);

APP.get("/cardtypes", (_, result) => result.send(Object.keys(CARDTYPES)));

APP.get("/cards/:type", ({ params }, result) =>
  getSheetData(SHEETNAMES[params.type]).then((deck) => result.send(deck))
);

APP.get("/deck/:deckid", ({ params }, result) =>
  getDeck(params.deckid).then((deck) => result.send(deck))
);

APP.get("/meta", (_, res) => {
  getMetadata().then((result) => res.send(result));
});
