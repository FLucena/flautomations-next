import styles from './CategoryItem.module.css';
import Image from 'next/image';


const CategoryItem = ({item}) => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={item.img} alt="item image" width={500} height={500} />
      <div className={styles.info}>
      <h1 className={styles.title}>{item.title}</h1>
      <button className={styles.button}>LEER MAS</button>
  </div>
</div>

  )
}

export default CategoryItem