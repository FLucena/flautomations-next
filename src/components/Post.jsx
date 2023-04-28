import Image from 'next/image';
import Link from 'next/link';

const styles = {
  wrapper: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  imageWrapperP: {
    margin: '0',
    padding: '10px',
  },
  videoWrapper: {
    width: '100%',
    height: '400px',
    border: 'none',
  },
  message: {
    color: 'red',
    fontWeight: 'bold',
  },
};

export default function Post(props) {
  const keys = Object.keys(props);
  const values = keys.map((key) => decodeURIComponent(props[key]));
  const encodedValues = values.map((val) => encodeURI(val));
  const { id } = props;
  const nextPageId = parseInt(id) + 1;
  const nextPageUrl = `/api/posts/${nextPageId}`;
  const previousPageId = parseInt(id) - 1;
  const previousPageUrl = `/api/posts/${previousPageId}`;

  return (
    <div style={styles.wrapper}>
      <h1>{decodeURI(encodedValues[0])}</h1>
      <p>{decodeURI(encodedValues[1])}</p>
      {encodedValues[3] !== '' ? (
        <div style={styles.imageWrapper}>
          <Image
            src={decodeURI(encodedValues[3])}
            alt="Post image"
            width={500}
            height={500}
          />
        </div>
      ) : (
        <div style={styles.imageWrapper}>
          <Image
            src={decodeURI(encodedValues[4])}
            alt="No image"
            width={500}
            height={500}
          />
          <p style={styles.imageWrapperP}>No image available</p>
        </div>
      )}
      <br />
      {encodedValues[2] !== '' ? (
        <div>
          <iframe
            style={styles.videoWrapper}
            src={encodedValues[2]}
            allow="autoplay"
          />
        </div>
      ) : (
        <p style={styles.message}>No video available</p>
      )}
      <br />
      <div>
        {previousPageId !== 0 ? (
          <>
            <Link href={previousPageUrl}>Previous page</Link>
          </>
        ) : null}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link href={nextPageUrl}>Next page</Link>
      </div>
    </div>
  );
}
