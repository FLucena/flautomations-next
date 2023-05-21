import { CategoriesData } from "./data.js"
import CategoryItem from "./CategoryItem"

const styles = {
    container: {
        display: 'flex',
        padding: '20px',
        justifyContent: 'space-between',
    }    
}

const Categories = () => {
    return <div style={styles.container}>
          {CategoriesData.map(item=> (
              <CategoryItem item={item} key={item.id}/>
          ))}
      </div>;
  };

export default Categories