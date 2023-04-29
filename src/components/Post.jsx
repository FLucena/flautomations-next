import Image from 'next/image';
import CustomPagination from "./CustomPagination";

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
    width: '800vh',
    border: 'none',
    marginBottom: '20px',
  },
  message: {
    color: 'red',
    fontWeight: 'bold',
  },
  paginationWrapper: {
    margin: '20px',
  },
};

export default function Post(props) {
  const { id, title, content, videoUrl, imageUrl, defaultImageUrl, pageCount, onChange } = props;
  const keys = Object.keys(props);
  const values = keys.map((key) => decodeURIComponent(props[key]));
  const encodedValues = values.map((val) => encodeURI(val));

  return (
    <div style={styles.wrapper}>
      <h1>{decodeURI(encodedValues[0])}</h1>
      <p>{decodeURI(encodedValues[1])}</p>
      {encodedValues[3] !== '' ? (
        <div style={styles.imageWrapper}>
          <Image src={decodeURI(encodedValues[3])} alt="Post image" width={500} height={500} />
        </div>
      ) : (
        <div style={styles.imageWrapper}>
          <Image src={decodeURI(encodedValues[4])} alt="No image" width={500} height={500} />
          <p style={styles.imageWrapperP}>No image available</p>
        </div>
      )}
      <br />
      {encodedValues[2] !== '' ? (
        <div>
          <iframe style={{ ...styles.videoWrapper, marginBottom: '20px' }} src={encodedValues[2]} allow="autoplay" />
        </div>
      ) : (
        <p style={styles.message}>No video available</p>
      )}
      <div style={styles.paginationWrapper}>
        <CustomPagination pageCount={parseInt(pageCount)} currentPage={parseInt(id)} />
      </div>
    </div>
  );
}
