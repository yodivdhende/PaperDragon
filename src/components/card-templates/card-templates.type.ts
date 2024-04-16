export const CardTemplates = {
 attack: "attack",
} as const

export type CardTemplate = typeof CardTemplates[keyof typeof CardTemplates]

export type AttackCardData = {
    template: typeof CardTemplates.attack;
    name: string;
    id: string;
    type: string;
    image: string;
    kost: string;
    effect: string;
    damage: string;
    damageType: string;
    mind:string;
    strength: string;
    reflex: string;
}                                            

export type CardData = AttackCardData;