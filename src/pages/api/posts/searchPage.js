import { renderToString } from 'react-dom/server';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Card from '../../../components/Card';
import Search from '../../../components/Search';
import { getData } from './getData';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  try {
    const filteredRowValuesList = await getData();

    const postHtml = renderToString(
      <>
        <Navbar />
        <Search />
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8vh',
          }}
        >
          {filteredRowValuesList.map((rowValues, index) => (
            <li key={index} style={{ flexBasis: '25%', maxWidth: '25%', padding: '10px' }}>
              <Card
                title={decodeURIComponent(rowValues[0])}
                description={decodeURIComponent(rowValues[1])}
                imageUrl={decodeURIComponent(rowValues[3])}
                id={index + 1}
              />
            </li>
          ))}
        </ul>
        <Footer />
      </>
    );

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(postHtml);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}