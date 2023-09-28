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

export async function setFavoritedPost(itemId, userEmail) {
    try {
        await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[5];

        // Load all cells before looping through them
        await sheet.loadCells();

        for (let row = 1; row < sheet.rowCount; row++) {
            const value = sheet.getCell(row, 0).value;
            if (value == userEmail) {
                const rawFavorites = sheet.getCell(row-1, 3).value || '';
                let favorites;
                if (rawFavorites.toString().length >= 1) {
                    const newList = rawFavorites + "," + itemId;
                    favorites = newList.split(',').sort((a, b) => a - b);
                    sheet.getCell(row-1, 3).value = favorites.join(',');
                } else {
                    sheet.getCell(row-1, 3).value = itemId; 
                }
                await sheet.getCell(row-1, 3).save();
                return;
            }
        }
    } catch (error) {
        console.error('Error updating favorites in Google Sheets:', error);
    }
}

export async function getFavorites(itemId) {
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
                return counter;
            }
        }
    } catch (error) {
        console.error('Error getting favorites in Google Sheets:', error);
    }
}

export async function getItemStatus(userEmail, itemId) {
    try {
        await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[5];

        // Load all cells before looping through them
        await sheet.loadCells();
        for (let row = 1; row < sheet.rowCount; row++) {
            const value = sheet.getCell(row, 0).value;
            if (value == userEmail) {
                const rawFavorites = sheet.getCell(row, 3).value || '';
                let favorites;
                if (rawFavorites.toString().includes(",")) {
                    favorites = rawFavorites.split(',');
                    return favorites.includes(itemId);
                } else {
                    return rawFavorites == itemId;
                }
            }
        }
    } catch (error) {
        console.error('Error getting favorites in Google Sheets:', error);
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const itemId = req.body.itemId;
        const isFavorited = req.body.isFavorited;
        const userEmail = req.body.userEmail;
        await setFavoritedPost(itemId, userEmail);
        await handleFavorite(itemId, isFavorited);
        res.status(200).json({ message: 'Favorite/Unfavorite processed successfully' });
    } else if (req.method === 'GET') {
        const itemId = req.query.itemId;
        const userEmail = req.query.userEmail;
        const counter = await getFavorites(itemId);
        if (userEmail != 'undefined') {
            const bool = await getItemStatus(userEmail, itemId);
            res.status(200).json({ counter: counter, bool: bool });
        } else {
            res.status(200).json({ counter: counter });
        }
    } else {
        res.status(405).end();
    }
}