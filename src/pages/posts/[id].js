import { google } from 'googleapis';
import NavBar from '../../components/Navbar';
import keys from '../../../secrets';
import styles from './[id].module.css';
import Image from 'next/image';

export async function getServerSideProps({ query }) {
  // Auth
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth: client });

  // Query
  const { id } = query;
  const range = `Sheet1!A${id}:E${id}`;
  
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  // Check if response.data.values exists and is not empty
  if (response.data.values && response.data.values.length > 0) {
    const [title, content, video, image, defaultImg] = response.data.values[0];
    return {
      props: {
        title,
        content,
        video,
        image,
        defaultImg
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default function Post({ title, content, video, image, defaultImg }) {
    return (
        <>
            <NavBar/>
            <div className={styles.post}>
                
                <h1 className={styles.title}>{title}</h1>
                {image ? (
                    <div className={styles.imgWrapper}>
                        <Image src={image} alt="post image" />
                    </div>
                ) : (
                    <div className={styles.imgWrapper}>
                        <Image src={defaultImg} alt="no image"/>
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