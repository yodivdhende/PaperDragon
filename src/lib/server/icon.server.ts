import { SHEETNAMES } from "$lib/components/cards/card-type.types";
import { getSheetData } from "./spread-fetch.server";

let ICONS: {
    id: string,
    name: string,
    path: string,
}[] = [];
async function getIcons() {
  if (ICONS.length === 0) {
    ICONS = await getSheetData(SHEETNAMES.icons) as any;
  }
  return ICONS;
}

export async function replaceWithIcons(text: string) {
  if (text == null) return;
  const ICONS = await getIcons();
  if (text.includes("#") === false) return text;
  return text
    .split("#")
    .map((section, i) => {
      if (i % 2 === 0) return section;
      const icon = ICONS.find((icon) => icon.id === section);
      if (icon === undefined) return section;
      return `<img src="/src/lib/assets/icons/${icon.path}"/>`;
    })
    .join("");
}