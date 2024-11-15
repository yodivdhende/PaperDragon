import { SHEETNAMES } from "$lib/components/cards/card-type.types";

const ICONS = [
  { id: 'air-dmg', name: 'Air Damage', path: 'fluffy-cloud.png' },
  { id: 'bleeding', name: 'Bleeding', path: 'heart-drop.png' },
  { id: 'blunt-dmg', name: 'Blunt Damage', path: 'hammer-drop.png' },
  { id: 'burning', name: 'Bruning', path: 'burning-passion.png' },
  { id: 'cold', name: 'Cold Token', path: 'ice-cube.png' },
  { id: 'def', name: 'Defence', path: 'shield.png' },
  { id: 'earth-dmg', name: 'Earth Damage', path: 'mountaintop.png' },
  { id: 'fire-dmg', name: 'Fire Damage', path: 'fire.png' },
  { id: 'frozen', name: 'Frozen', path: 'frozen-body.png' },
  { id: 'guarded', name: 'Guarded', path: 'arrows-shield.png' },
  { id: 'guarding', name: 'Gaurding', path: 'shield-bounces.png' },
  { id: 'hasted', name: 'hast', path: 'wingfoot.png' },
  { id: 'heat', name: 'Heat Token', path: 'heat-haze.png' },
  { id: 'hidden', name: 'hiding', path: 'hidden.png' },
  { id: 'ice-dmg', name: 'Ice Damage', path: 'snowflake-2.png' },
  { id: 'lp', name: 'Life points', path: 'hearts.png' },
  { id: 'marked', name: 'Mark ', path: 'crosshair.png' },
  { id: 'mnd', name: 'Mind', path: 'brain.png' },
  { id: 'rage', name: 'Rage', path: 'swallower.png' },
  { id: 'rfx', name: 'Reflex', path: 'sprint.png' },
  { id: 'shaken', name: 'Shaken', path: 'knocked-out-stars.png' },
  { id: 'sharp-dmg', name: 'Sharp damage', path: 'saber-slash.png' },
  { id: 'str', name: 'Strength', path: 'biceps.png' },
  { id: 'trap', name: 'trap', path: 'wolf-trap.png' },
  { id: 'posion', name: 'posion', path: 'deathcab.png' },
] as const;

export async function replaceWithIcons(text: string) {
  if (text == null) return;
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