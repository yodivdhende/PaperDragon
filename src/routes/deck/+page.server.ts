import { SHEETNAMES } from "$lib/components/cards/card-type.types";
import { getSheetData } from "$lib/server/spread-fetch.server";

export async function load() {
    const decktypes = await getSheetData(SHEETNAMES.decktypes);
    return {
        decktypes,
    } 
}