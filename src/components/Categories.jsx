import styled from "styled-components"
import { CategoriesData } from "./data.js"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
  return <Container>
        {CategoriesData.map(item=> (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>;
};

export default Categories