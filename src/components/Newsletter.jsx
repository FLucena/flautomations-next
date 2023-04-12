import { Send } from '@mui/icons-material';
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>
      <div className={styles.desc}>
        Mantente al tanto de las nuevas soluciones!
      </div>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder="Tu email" />
        <button className={styles.button}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
