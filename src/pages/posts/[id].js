import { google } from 'googleapis';
import NavBar from '../../components/Navbar';
import styles from './[id].module.css';
import LRUCache from 'lru-cache';

const cache = new LRUCache({
  max: 100, // maximum number of items to store in cache
  maxAge: 60 * 1000, // cache for 1 minute
});

export async function getServerSideProps({ query }) {
  const { id } = query;
  const range = `Sheet1!A${id}:E${id}`;

  // Check cache for existing response
  const cachedResponse = cache.get(range);
  if (cachedResponse) {
    return { props: cachedResponse };
  }

  // Auth
  const client = new google.auth.JWT(
    process.env.client_email,
    null,
    process.env.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth: client });
  try {
    // Call API
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });

    // Check if response.data.values exists and is not empty
    if (response.data.values && response.data.values.length > 0) {
      const [title, content, video, image, defaultImg] = response.data.values[0];
      console.log(response);

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
  } catch (e) {
    response.status(500).json({message: e.message})
  }
}

export default function Post({ title, content, video, image, defaultImg }) {
  return (
    <>
      <NavBar />
      <div className={styles.post}>
        <h1 className={styles.title}>{title}</h1>
        {image ? (
          <div className={styles.imgWrapper}>
            <img src={image} alt="post image" />
          </div>
        ) : (
          <div className={styles.imgWrapper}>
            <img src={defaultImg} alt="no image" />
            <p className={styles.message}>No image available</p>
          </div>
        )}
        <div className={styles.content}>{content}</div>
        {video ? (
          <div className={styles.videoWrapper}>
            <iframe className={styles.video} src={video} allow="autoplay" />
          </div>
        ) : (
          <p className={styles.message}>No video available</p>
        )}
      </div>
    </>
  );
}
