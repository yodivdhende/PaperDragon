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
  if (text.includes("#") === "false") return text;
  return text
    .split("#")
    .map((section, i) => {
      if (i % 2 === 0) return section;
      const icon = ICONS.find((icon) => icon.id === section);
      if (icon === undefined) return section;
      return `<img src="src/assets/icons/${icon.path}"/>`;
    })
    .join("");
}

module.exports = {
  replaceWithIcons,
};
