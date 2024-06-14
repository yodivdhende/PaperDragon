import { GOOGLE_API_KEY, GOOGLE_CLIENT_ID } from "$env/static/private";
import { json } from "@sveltejs/kit";

export function GET() {
    return json({
        googleApiKey: GOOGLE_API_KEY,
        googleClientId: GOOGLE_CLIENT_ID,
    })
}