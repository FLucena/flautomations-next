import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SliderItems } from './data';
import Link from 'next/link';
import {
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import * as contentEn from './content-en';
import * as contentEs from './content-es';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    flexDirection: 'row',
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
    flexDirection: 'row',
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
    margin: '50px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '50%',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '50%',
  },
  infoContainer: {
    padding: '50px',
  },
  title: {
    fontSize: '30px',
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
  }
};

const mediaQueriesStyles = {
  '@media (max-width: 768px)': {
    container: {
      marginTop: '3rem',
      height: '50rem',
      width: '100%'
    },
    slide: {
      position: 'relative',
      flexDirection: 'column',
      backgroundColor: 'transparent',
    },
    imgContainer: {
      margin: '50px 20px',
      padding: '10%',
      height: '20%',
    },
    infoContainer: {
      padding: '3rem',
      margin: '1rem 0',
      maxWidth: '300px',
    },
    title: {
      fontSize: '24px', 
    },
    desc: {
      margin: '30px 0', 
      fontSize: '16px', 
    },
    button: {
      padding: '8px', 
      fontSize: '16px', 
    },
    arrow: {
      width: '40px', 
      height: '40px', 
    },
    leftArrow: {
      left: '5px',
    },
    rightArrow: {
      right: '5px',
    },
  }
}

const Slider = ({ lang }) => {
  const content = lang === 'en' ? contentEn : contentEs;  
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((slideIndex) => (slideIndex > 0 ? slideIndex - 1 : 2));
    } else {
      setSlideIndex((slideIndex) => (slideIndex < 2 ? slideIndex + 1 : 0));
    }
    clearInterval(intervalId);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    const intervalId = setInterval(() => {
      setSlideIndex((slideIndex) => (slideIndex < 2 ? slideIndex + 1 : 0));
    }, 10000); // 10000 milliseconds = 10 seconds

    return intervalId;
  };


  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      const intervalId = startAutoSlide();
      return () => {
        clearInterval(intervalId);
      };
    }, 2000);
    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <div 
      style={{
        ...styles.container,
        ...(isMobile ? mediaQueriesStyles['@media (max-width: 768px)'].container : {}),
      }}
    >
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
            style={{
              ...styles.slide,
              ...styles[`slideBg${item.id}`],
              ...(isMobile ? mediaQueriesStyles['@media (max-width: 768px)'].slide : {}),
            }}
          >
            <div 
              style={{
                ...styles.imgContainer,
                ...(isMobile ? mediaQueriesStyles['@media (max-width: 768px)'].imgContainer : {}),
              }}
            >
              <Image
                src={item.img}
                alt="item image"
                width={500}
                height={500}
              />
            </div>
            <Box
              mt={{ base: '24px', sm: '100px', md: '5px' }}
              w={{ base: '60%', sm: '50%' }}
              py="10"
              mr="40px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Text
                fontSize={{ base: '18px', sm: '26px', md: '36px' }}
                fontWeight="bold"
              >
                {item.title}
              </Text>
              <Text
                fontSize={{ base: '12px', sm: '14px', md: '20px' }}
                fontWeight="500"
                letterSpacing="3px"
                mt="2"
              >
                {item.desc}
              </Text>
              <Link href={`/${item.id}`}>
                <Button
                  mt="4"
                  px="6"
                  py="3"
                  fontSize={{ base: '12px', sm: '14px', md: '20px' }}
                  backgroundColor="transparent"
                  cursor="pointer"
                >
                  Leer más
                </Button>
              </Link>
            </Box>
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