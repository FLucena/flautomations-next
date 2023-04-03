import { google } from 'googleapis';

export async function getServerSideProps({ }) {
  const range = `Sheet1!A2:E2`;

  const client = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth: client });
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
