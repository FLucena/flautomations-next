import React, { useState } from 'react';
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
    boxShadow: '15px 15px 30px #bebebe, -15px -15px 30px #ffffff',
    padding: '1vh',
    overflow: 'hidden',
    margin: '1vh',
    paddingTop: '4vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    height: '52%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '3px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    textAlign: 'center',
    color: '#100c08',
  },
  description: {
    color: '#1a1110',
  },
};

const Card = ({ title, description, imageUrl, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <Link href={`/${id}`} style={{ textDecoration: 'none' }}>
      <div style={{ ...styles.card, background: `url(${imageUrl})`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={styles.contentContainer}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;