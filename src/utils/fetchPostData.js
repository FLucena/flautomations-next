  import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

export async function fetchPostData(id) {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const range = `A${id}:L${id}`;
    await sheet.loadCells(range);

    const rowValues = [];
    for (let col = 0; col < 12; col++) {
      const cell = sheet.getCell(id - 1, col);
      const val = cell.value == null ? '' : encodeURIComponent(cell.value);
      rowValues.push(val);
    }

    return rowValues;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch post data.');
  }
}