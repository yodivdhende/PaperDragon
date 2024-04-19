import {SPREADSHEET_API_KEY, SPREADSHEET_CLIENT_ID}  from "../config/api-keys";

declare namespace gapi {
    function load(s: string, cb:  () => void): void;
    let client: any;
}

declare namespace google {
    let accounts: any;
}

// const DISCOVERY_DOC = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxzDDCGHfiKzvSwVpL44CAq6XBIAIuk8_ia4qFO-_ve7v0EXv0tz6WyECsSvY-9NcX5qbXHYtUzav1/pubhtml' as const;
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

let gapiInited: boolean =false;
let gisInited: boolean = false;


let tokenClient: any; 

      /**
       * Callback after api.js is loaded.
       */
      function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
      }

      /**
       * Callback after the API client is loaded. Loads the
       * discovery doc to initialize the API.
       */
      async function initializeGapiClient() {
        await gapi.client.init({
          apiKey: SPREADSHEET_API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
        maybeEnableButtons();
      }

      /**
       * Callback after Google Identity Services are loaded.
       */
      function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: SPREADSHEET_CLIENT_ID,
          scope: SCOPES,
          callback: '', // defined later
        });
        gisInited = true;
        maybeEnableButtons();
      }

      /**
       * Enables user interaction after all libraries are loaded.
       */
      function maybeEnableButtons() {
        if (gapiInited && gisInited) {
            const element = document.getElementById('authorize_button')
            if(element) element.style.visibility = 'visible';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      export function handleAuthClick() {
        tokenClient.callback = async (response : {error?: string}) => {
          if (response.error !== undefined) {
            throw (response);
          }
          const signoutElement = document.getElementById('signout_button');
          if(signoutElement) signoutElement.style.visibility = 'visible';
          const authButtonElement = document.getElementById('authorize_button');
          if(authButtonElement) authButtonElement.innerText = 'Refresh';
          await listMajors();
        };

        if (gapi.client.getToken() === null) {
          // Prompt the user to select a Google Account and ask for consent to share their data
          // when establishing a new session.
          tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
          // Skip display of account chooser and consent dialog for an existing session.
          tokenClient.requestAccessToken({prompt: ''});
        }
      }

      /**
       *  Sign out the user upon button click.
       */
      export function handleSignoutClick() {
        const token = gapi.client.getToken();
        if (token !== null) {
          google.accounts.oauth2.revoke(token.access_token);
          gapi.client.setToken('');
        //   document.getElementById('content').innerText = '';
        //   document.getElementById('authorize_button').innerText = 'Authorize';
        //   document.getElementById('signout_button').style.visibility = 'hidden';
        }
      }

      /**
       * Print the names and majors of students in a sample spreadsheet:
       * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
       */
      async function listMajors() {
        let response;
        try {
          // Fetch first 10 files
          response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
            range: 'Class Data!A2:E',
          });
        } catch (err) {
          const element = document.getElementById('content')
          if(element) element.innerText = (err as {message: string}).message;
          return;
        }
        const range: {values: string[]} = response.result;
        if (!range || !range.values || range.values.length == 0) {
            const element = document.getElementById('content');
            if(element) element.innerText = 'No values found.';
          return;
        }
        // Flatten to string to display
        const output = range.values.reduce((str, row) => `${str}${row[0]}, ${row[4]}\n`,
            'Name, Major:\n');
        const element = document.getElementById('content')
        if(element) element.innerText = output;
      }