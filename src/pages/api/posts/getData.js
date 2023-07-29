import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

export async function getData() {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const numRows = sheet.rowCount;
    const rowValuesList = [];
    await sheet.loadCells();

    for (let row = 0; row < numRows; row++) {
      const rowValues = [];
      for (let col = 0; col < 4; col++) {
        const cell = sheet.getCell(row, col);
        const value = cell.value || '';
        rowValues.push(encodeURIComponent(value));
      }
      if (rowValues[0] !== '') {
        rowValuesList.push(rowValues);
      }
    }

    return rowValuesList;
  } catch (error) {
    console.error(error);
    throw new Error('Data fetching error');
  }
}