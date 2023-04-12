import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import styles from './Slider.module.css';
import { SliderItems } from './data';
import Image from 'next/image';


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => handleClick('left')}
      >
        <ArrowLeftOutlined />
      </div>
      <div className={styles.wrapper} style={{ transform: `translateX(-${slideIndex * 100}vw)` }}>
        {SliderItems.map((item) => (
          <div className={styles.slide} style={{ backgroundColor: `#${item.bg}` }} key={item.id}>
            <div className={styles.imgContainer}>
                <Image
                    src={item.img}
                    alt="item image"
                    width={500}
                    height={500}
                    quality={100}
                />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <button className={styles.button}>Read More</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => handleClick('right')}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
