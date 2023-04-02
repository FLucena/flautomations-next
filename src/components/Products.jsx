import styled from 'styled-components'
import { PopularProducts } from "./data.js"
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {PopularProducts.map((item, idx) => (
        <Product item={item} key={idx}  />
      ))}
    </Container>
  );
};

export default Products;