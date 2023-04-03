import { google } from 'googleapis';
import LRUCache from 'lru-cache';
import { Buffer } from 'buffer';

const cache = new LRUCache({
  max: 100, // maximum number of items to store in cache
  maxAge: 60 * 1000, // cache for 1 minute
});

export async function getServerSideProps({ query }) {
  const { id } = query;
  const range = `Sheet1!A2:E2`;

  // Check cache for existing response
  const cachedResponse = cache.get(range);
  if (cachedResponse) {
    return { props: cachedResponse };
  }

  const credentials = `${process.env.CLIENT_EMAIL}:${Buffer.from(
    process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    'base64'
  ).toString()}`;
  const encodedCredentials = Buffer.from(credentials).toString('base64');

  // Auth
  const client = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY,
    ['https://www.googleapis.com/auth/spreadsheets']
  );


  const sheets = google.sheets({ version: 'v4', auth: client });
  console.log(sheets);
  // Call API
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  // Check if response.data.values exists and is not empty
  if (response.data.values && response.data.values.length > 0) {
    const [title, content, video, image, defaultImg] = response.data.values[0];
    // Store response in cache
    const props = {
      title,
      content,
      video,
      image,
      defaultImg,
    };
    cache.set(range, props);

    return { props };
  } else {
    return { notFound: true };
  }
}

function ApiTest(props) {
  return (
    <div>
      {props.image}
    </div>
  );
}

export default ApiTest;
