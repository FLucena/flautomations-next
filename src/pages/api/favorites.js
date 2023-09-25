import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

// Function to increment favorites in Google Sheets
export async function handleFavorite(itemId, isFavorited) {
    try {
        await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[4];

        // Load all cells before looping through them
        await sheet.loadCells();

        for (let row = 1; row < sheet.rowCount; row++) {
            const value = sheet.getCell(row, 0).value;
            if (value == itemId) {
                const counter = Number(sheet.getCell(row, 1).value);
                if (isFavorited) {
                    sheet.getCell(row, 1).value = counter + 1;
                } else {
                    sheet.getCell(row, 1).value = counter - 1;
                }
                await sheet.getCell(row, 1).save();
            }
        }
    } catch (error) {
        console.error('Error updating favorites in Google Sheets:', error);
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const itemId = req.body.itemId;
        const isFavorited = req.body.isFavorited;
        await handleFavorite(itemId, isFavorited);
        res.status(200).json({ message: 'Favorite/Unfavorite processed successfully' });
    } else {
        res.status(405).end();
    }
}