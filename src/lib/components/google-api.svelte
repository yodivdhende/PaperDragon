<script lang="ts">
    import { googleTokenStore } from "$lib/services/google-token.service";
    const SHEET_URL = '';
    const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly'; 
    let apiKey: string | undefined;
    let clientId: string | undefined;

    function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
    }

    async function getKeys(){
        if( apiKey == null || clientId == null)  {
            const response= await fetch('/googleapi');
            const result = await response.json();
            apiKey = result.googleApiKey;
            clientId = result.googleClientId;
        }
        return { apiKey, clientId }
    }

    async function initializeGapiClient() {
        await gapiLoaded.client.init({
            apiKey: (await getKeys()).apiKey,
            discoveryDocs:[SHEET_URL],
        })
    }

    async function gisLoaded() {
        googleTokenStore.set(google.accounts.oauth2.initTokenClient({
            client_id: (await getKeys()).clientId,
            scope: SCOPES
        }))
    }
</script>

<svelte:head>
 <script async defer src="https://apis.google.com/js/api.js" on:load={gapiLoaded}></script> 
  <script async defer src="https://accounts.google.com/gsi/client" on:load={gisLoaded}></script>
</svelte:head>