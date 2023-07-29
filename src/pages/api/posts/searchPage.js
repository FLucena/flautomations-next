import { GoogleSpreadsheet } from 'google-spreadsheet';
import { renderToString } from 'react-dom/server';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Card from '../../../components/Card';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

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

    for (let row = 1; row < numRows; row++) {  
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

    const postHtml = renderToString(
      <>
        <Navbar />
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {rowValuesList.map((rowValues, index) => (
            <li key={index} style={{ flexBasis: '25%', maxWidth: '25%', padding: '10px' }}>             
              <Card
                title={decodeURIComponent(rowValues[0])}
                description={decodeURIComponent(rowValues[1])}
                imageUrl={decodeURIComponent(rowValues[3])}
              />
            </li>
          ))}
        </ul>
        <Footer />
      </>,
    );

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(postHtml);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}