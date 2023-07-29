import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '290px',
    height: '354px',
    borderRadius: '30px',
    background: '#e0e0e0',
    boxShadow: '15px 15px 30px #bebebe, -15px -15px 30px #ffffff',
    padding: '1vh',
    overflow: 'hidden',
    margin: '1vh',
    paddingTop: '4vh',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '48%',
    borderRadius: '30px 30px 0 0',
    maxHeight: '48%',
    maxWidth: '80%',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    height: '52%',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  description: {
    color: '#888',
  },
};

const Card = ({ title, description, imageUrl, id }) => {
  return (
    <Link href={`/api/posts/${id}`} style={{ textDecoration: 'none' }}>
        <div style={styles.card}>
          {imageUrl ? (
            <div style={styles.imageContainer}>
              <Image
                src={imageUrl}
                alt={title}
                height={'150'}
                width={'230'}
              />
            </div>
          ) : (
            <div style={styles.imageContainer}>
              <Image
                src='https://lh3.googleusercontent.com/d/1VcpIxpcH9BIlTqjFjFKer85y6askTNH7'
                alt='No image'
                height={'150'}
                width={'230'}
              />
            </div>
          )}
          <div style={styles.contentContainer}>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.description}>{description}</p>
          </div>
        </div>
    </Link>
  );
};

export default Card;