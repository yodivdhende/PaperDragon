import { getDefaultTemplate } from '$lib/components/cards/card-data.types';
import { isCardType } from '$lib/components/cards/card-type.types.js';

export function load({params}) {
    const {cardtype} =  params;
    if(cardtype && isCardType(cardtype)) return {template: getDefaultTemplate(cardtype)}
    return {template: null} 
}