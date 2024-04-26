const { google } = require("googleapis");
const { authorize } = require("./google-auth");

const SPREADSHEET_ID = "1BzYrPAndlgYYcHC0thx6oNQ4HSuip5CJAbQMpXV3vhc";
const SHEETNAMES = {
  decktypes: "DeckTypes",
  maneuvers: "Maneuvers",
  attacks: "Attacks",
  items: "Items",
  traps: "Traps",
  minions: "Minions",
  bosses: "Bosses",
  artifacts: "Artifacts",
  backgrounds: "Backgrounds",
  statuses: "Statuses",
  conditions: "Conditions",
  icons: "Icons",
  deckcontent: "DeckContent",
};

async function getSpreadSheet() {
  const auth = await authorize();
  const sheets = google.sheets({ version: "v4", auth });
  return sheets.spreadsheets;
}

function createObjectFromSheetData(rows) {
  return rows
    .map((row, x, array) => {
      if (x === 0) return null;
      const result = {};
      row.forEach((column, y) => {
        result[array[0][y].toLowerCase()] = column;
      });
      return result;
    })
    .filter((data) => data !== null);
}

async function getMetadata() {
  const sheet = (await getSpreadSheet()).get({
    spreadsheetId: SPREADSHEET_ID,
  });
  return sheet;
}

async function getSheetData(name) {
  let result = await (
    await getSpreadSheet()
  ).values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: name,
  });
  return createObjectFromSheetData(result.data.values);
}

module.exports = {
  SHEETNAMES,
  getSheetData,
  getMetadata,
};
