import { CategoriesData } from "./data.js";
import CategoryItem from "./CategoryItem";

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    gap: '1px',
  },
};

const Categories = () => {
  return (
    <div style={styles.container}>
      {CategoriesData.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
