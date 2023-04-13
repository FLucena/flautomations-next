import { GoogleSpreadsheet } from 'google-spreadsheet';
import { renderToString } from 'react-dom/server';
import Post from '../../components/Post';
import styles from "./[id].module.css";

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

export default async function handler(req, res) {
  const { id } = req.query;
  const range = `A${id}:E${id}`;
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
    await sheet.loadCells(range);
    const rowValues = [];
    let val = "";
    for (let col = 0; col < 5; col++) {
      const cell = sheet.getCell(id - 1, col);
      cell.value == null ? val=  cell.value = "" : val = cell.value
      rowValues.push(encodeURIComponent(val));
    }
    const postHtml = renderToString(<Post {...rowValues} id={id} imageSRC={rowValues[3]} postClassName={styles.post} titleClassName={styles.postTitle} imgWrapperClassName={styles.imgWrapper} messageClassName={styles.message} />);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(postHtml);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}