import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Image from 'next/image';
import styles from './Product.module.css';

const Product = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <Image src={item.img} alt="product image" width={500} height={500} />
      <div className={styles.info}>
        <div className={styles.icon}>
          <ShoppingCartOutlined />
        </div>
        <div className={styles.icon}>
          <SearchOutlined />
        </div>
        <div className={styles.icon}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
