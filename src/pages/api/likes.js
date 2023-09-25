import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

// Function to increment likes in Google Sheets
export async function handleLike(itemId, isLiked) {
    try {
        await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[3];

        // Load all cells before looping through them
        await sheet.loadCells();

        for (let row = 1; row < sheet.rowCount; row++) {
            const value = sheet.getCell(row, 0).value;
            if (value == itemId) {
                const counter = Number(sheet.getCell(row, 1).value);
                if (isLiked) {
                    sheet.getCell(row, 1).value = counter + 1;
                } else {
                    sheet.getCell(row, 1).value = counter - 1;
                }
                await sheet.getCell(row, 1).save();
            }
        }
    } catch (error) {
        console.error('Error updating likes in Google Sheets:', error);
    }
}

export async function getLikes(itemId) {
    try {
        await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[3];

        // Load all cells before looping through them
        await sheet.loadCells();

        for (let row = 1; row < sheet.rowCount; row++) {
            const value = sheet.getCell(row, 0).value;
            if (value == itemId) {
                const counter = Number(sheet.getCell(row, 1).value);
                return counter;
            }
        }
    } catch (error) {
        console.error('Error getting likes in Google Sheets:', error);
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const itemId = req.body.itemId;
        const isLiked = req.body.isLiked;
        await handleLike(itemId, isLiked);
        res.status(200).json({ message: 'Like/Unlike processed successfully' });
    } else if (req.method === 'GET') {
        const itemId = req.query.itemId;
        const counter = await getLikes(itemId);
        res.status(200).json({ counter: counter });
    } else {
        res.status(405).end();
    }
}
