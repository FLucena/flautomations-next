import { PopularProducts } from "./data.js";
import Product from './Product';

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
};

const Products = () => {
  return (
    <div style={styles.container}>
      {PopularProducts.map((item, idx) => (
        <Product item={item} key={idx} />
      ))}
    </div>
  );
};

export default Products;
