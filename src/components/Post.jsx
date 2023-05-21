import Image from "next/image";
import AuthorCard from './AuthorCard';
import CustomPagination from "./CustomPagination";
import React, { useEffect, useState } from 'react'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column', // add this line to stack flex items vertically
    justifyContent: 'center', // updated line to center the container horizontally
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    maxWidth: '1200px',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Set the width of the video container to be 100% of its parent container
    maxWidth: '100%', // Set the maximum width of the video container to be 100% of its parent container
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
  const { id, pageCount } = props;
  const keys = Object.keys(props);
  const values = keys.map((key) => decodeURIComponent(props[key]));
  const encodedValues = values.map((val) => encodeURI(val));
  console.log(values);
  const [currentPage, setCurrentPage] = useState(parseInt(id));
  useEffect(() => {
    setCurrentPage(parseInt(id));
  }, [id]);

  return (
    <>
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
        <div style={styles.videoWrapper}>
          {encodedValues[2] !== '' ? (
            <iframe src={encodedValues[2]} width="640" height="352" ></iframe>
          ) : (
            <p style={styles.message}>No video available</p>
          )}
        </div>
        <div>
          <AuthorCard authorName={decodeURI(encodedValues[6])} authorImg={decodeURI(encodedValues[8])} authorDescription={decodeURI(encodedValues[11])} />
        </div>
        <div style={styles.paginationWrapper}>
          <CustomPagination pageCount={parseInt(pageCount)} currentPage={parseInt(id)} />
        </div>
      </div>
    </>
  );
}