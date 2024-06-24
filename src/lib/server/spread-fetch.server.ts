import { google } from 'googleapis';
import { authorize } from './google-auth.server';

const SPREADSHEET_ID = '1BzYrPAndlgYYcHC0thx6oNQ4HSuip5CJAbQMpXV3vhc';

async function getSpreadSheet() {
	const auth = await authorize();
	//@ts-ignore
	const sheets = google.sheets({ version: 'v4', auth });
	return sheets.spreadsheets;
}

function createObjectFromSheetData(rows: string[][]) {
	return rows
		.map((row, x, array) => {
			if (x === 0) return null;
			const result: Record<string, string> = {};
			row.forEach((column, y) => {
				result[array[0][y].toLowerCase()] = column;
			});
			return result;
		})
		.filter((data) => data !== null);
}

export async function getMetadata() {
	const sheet = (await getSpreadSheet()).get({
		spreadsheetId: SPREADSHEET_ID
	});
	return sheet;
}

export async function getSheetData(name: string) {
	console.log('requesting sheet: ', name);
	let result = await (
		await getSpreadSheet()
	).values.get({
		spreadsheetId: SPREADSHEET_ID,
		range: name
	});
	return createObjectFromSheetData(result.data.values as string[][]);
}

