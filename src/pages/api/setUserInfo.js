import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

export async function handleUserData(id) {
    try {
        await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[5];
        await sheet.loadCells();
        for (let row = 1; row < sheet.rowCount; row++) {
            const value = sheet.getCell(row, 0).value;
            if (value == id) {
                return;
            }
        }
        sheet.addRow([id]);
        await sheet.saveUpdatedCells();
    
    } catch (error) {
        console.error('Error updating favorites in Google Sheets:', error);
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const id = req.body.id;
        await handleUserData(id);
        res.status(200).json({ message: 'User data successfully saved in DB' });
    } else {
        res.status(405).end();
    }
}