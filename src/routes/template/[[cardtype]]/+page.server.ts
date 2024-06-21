import { getDefaultTemplate, isCardType } from '$lib/components/cards/card-type.types.js';

export function load({params}) {
    const {cardtype} =  params;
    if(isCardType(cardtype)) return {template: getDefaultTemplate(cardtype)}
    return {template: null} 
}