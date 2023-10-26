import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
export async function getFavorites() {
  try {
    await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[5];
    await sheet.loadCells();
    let allFavorites = [];
    let rowData = [];
    
    for (let row = 1; row < sheet.rowCount; row++) {
      if (sheet.getCell(row, 3).value) {
        rowData.push(encodeURIComponent(sheet.getCell(row, 0).value));
        rowData.push(encodeURIComponent(sheet.getCell(row, 3).value)); 
        allFavorites.push(rowData);
        rowData = [];
      }
    } 
    return allFavorites;
  } catch (error) {
    console.error(error);
    throw new Error('Data fetching error');
  }
}