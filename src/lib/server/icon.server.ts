import { SHEETNAMES } from "$lib/components/cards/card-type.types";

let ICONS: {
  id: string,
  name: string,
  path: string,
}[] = [];
async function getIcons() {
  if (ICONS.length === 0) {
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