import { CategoriesData } from "./data.js"
import CategoryItem from "./CategoryItem"
import styles from './Categories.module.css';

const Categories = () => {
    return <div className={styles.container}>
          {CategoriesData.map(item=> (
              <CategoryItem item={item} key={item.id}/>
          ))}
      </div>;
  };

export default Categories