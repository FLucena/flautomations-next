import { GoogleSpreadsheet } from 'google-spreadsheet';
const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

export default async function handler(req, res) {
  const { id } = req.query;
  const range = `A${id}:D${id}`; // changed range to include only columns A to D
  if (req.method !== 'GET') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    });

    await doc.loadInfo(); // Load the spreadsheet info before accessing sheets or other properties
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells(range);
    const rowValues = [];
    for (let col = 0; col < 4; col++) { // loop through columns A to D
      const cell = sheet.getCell(id - 1, col);
      rowValues.push(cell.value);
    }
    res.status(200).send(rowValues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
