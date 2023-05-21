import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import Image from 'next/image';
import { SliderItems } from './data';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  arrow: {
    width: '50px',
    height: '50px',
    backgroundColor: '#fff7f7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    cursor: 'pointer',
    opacity: 0.5,
    zIndex: 2,
  },
  leftArrow: {
    left: '10px',
  },
  rightArrow: {
    right: '10px',
  },
  wrapper: {
    height: '100%',
    display: 'flex',
    transition: 'all 1.5s ease',
  },
  transformedWrapper: {
    transform: 'translateX(var(--translateX, 0))',
  },
  slide: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  slideBg1: {
    backgroundColor: '#f2f2f2',
  },
  slideBg2: {
    backgroundColor: '#fcf8f7',
  },
  slideBg3: {
    backgroundColor: '#f4f4f4',
  },
  imgContainer: {
    height: '100%',
    flex: 1,
  },
  image: {
    height: '80%',
  },
  infoContainer: {
    padding: '50px',
    flex: 1,
  },
  title: {
    fontSize: '40px',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  desc: {
    margin: '50px 0',
    fontSize: '20px',
    fontWeight: 500,
    letterSpacing: '3px',
    width: '80%',
  },
  button: {
    padding: '10px',
    fontSize: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((slideIndex) => (slideIndex > 0 ? slideIndex - 1 : 2));
    } else {
      setSlideIndex((slideIndex) => (slideIndex < 2 ? slideIndex + 1 : 0));
    }
  };

  return (
    <div style={styles.container}>
      <div
        style={{ ...styles.arrow, ...styles.leftArrow }}
        onClick={() => handleClick('left')}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        style={{
          ...styles.wrapper,
          ...styles.transformedWrapper,
          transform: `translateX(-${slideIndex * 100}vw)`,
        }}
      >
        {SliderItems.map((item) => (
          <div
            key={item.id}
            style={{ ...styles.slide, ...styles[`slideBg${item.id}`] }}
          >
            <div style={styles.imgContainer}>
              <Image
                src={item.img}
                alt="item image"
                width={500}
                height={500}
                quality={100}
              />
            </div>
            <div style={styles.infoContainer}>
              <div style={styles.title}>{item.title}</div>
              <p style={styles.desc}>{item.desc}</p>
              <button style={styles.button}>Read More</button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ ...styles.arrow, ...styles.rightArrow }}
        onClick={() => handleClick('right')}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
