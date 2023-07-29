import React from 'react';
import Image from 'next/image';

const styles = {
  card: {
    display: 'flex', // Use flexbox
    flexDirection: 'column', // Stack elements vertically
    justifyContent: 'center', // Center elements vertically
    alignItems: 'center', // Center elements horizontally
    width: '290px',
    height: '354px',
    borderRadius: '30px',
    background: '#e0e0e0',
    boxShadow: '15px 15px 30px #bebebe, -15px -15px 30px #ffffff',
    padding: '1vh',
    overflow: 'hidden',
    margin: '1vh',
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
    padding: '1rem',
    height: '52%',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  description: {
    color: '#888',
  },
};

const Card = ({ title, description, imageUrl }) => {
  return (
    <div style={styles.card}>
      {imageUrl && (
        <div style={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )}
      <div style={styles.contentContainer}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
