import Image from "next/legacy/image";

const styles = {
  container: {
    flex: 1,
    margin: '3px',
    height: '70vh',
    position: 'relative',
    background: 'linear-gradient(to bottom, transparent, transparent 50%, #000000 50%, #000000)',
    display: 'inline-block',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  info: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  button: {
    border: 'none',
    padding: '10px',
    backgroundColor: 'white',
    color: 'gray',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

const CategoryItem = ({item}) => {
  return (
    <div style={styles.container}>
      <Image style={styles.image} src={item.img} alt="item image" width={500} height={500} />
      <div style={styles.info}>
      <h1 style={styles.title}>{item.title}</h1>
      <button style={styles.button}>LEER MAS</button>
  </div>
</div>

  )
}

export default CategoryItem;