const { getSheetData, SHEETNAMES } = require("./spread-fetch");
let ICONS = [];

async function getIcons() {
  if (ICONS.length === 0) {
    ICONS = await getSheetData(SHEETNAMES.icons);
  }
  return ICONS;
}

async function replaceWithIcons(text) {
  if (text == null) return;
  const ICONS = await getIcons();
  console.log(ICONS);
  return text
    .split("#")
    .map((section, i) => {
      if (i % 2 === 0) return section;
      const icon = ICONS.find((icon) => icon.id === section);
      if (icon === undefined) return section;
      return `<img src="${fixIconPath(icon.path)}"/>`;
    })
    .join("");
}

function fixIconPath(path) {
  let id = path.split("/")[5];
  return `https://drive.google.com/thumbnail?id=${id}`;
}

module.exports = {
  replaceWithIcons,
};
