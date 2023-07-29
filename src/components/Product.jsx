import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Image from "next/image";

const styles = {
  container: {
    flex: 1,
    margin: '5px',
    minWidth: '280px',
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fbfd',
    position: 'relative',
  },
  containerHover: {
    '&:hover .info': {
      opacity: 1,
    },
  },
  circle: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundColor: 'white',
    position: 'absolute',
  },
  info: {
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
  },
  icon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    transition: 'transform 0.5s ease',
  },
  iconHover: {
    '&:hover': {
      backgroundColor: '#e9f5f5',
      transform: 'scale(1.1)',
    },
  },
  img: {
    height: '25%',
    zIndex: 2,
  },
};

const Product = ({ item }) => {
  return (
    <div style={styles.container}>
      <div style={styles.circle} />
      <Image src={item.img} alt="product image" width={500} height={500} />
      <div style={styles.info}>
        <div style={styles.icon}>
          <ShoppingCartOutlined />
        </div>
        <div style={styles.icon}>
          <SearchOutlined />
        </div>
        <div style={styles.icon}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
