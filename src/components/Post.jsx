import NavBar from './Navbar';
import styles from './Post.module.css';

export default function Post(props) {
  return (
    <>
      <NavBar />
      <div className={styles.post}>
        <h1 className={styles.title}>{props[0]}</h1>
        <p>{props[1]}</p>
      </div>
    </>
  );
}
