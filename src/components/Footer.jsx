import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import styles from "./Footer.module.css";
import Image from 'next/image';


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>FL Automations.</h1>
        <p className={styles.desc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className={styles.socialContainer}>
          <div className={`${styles.socialIcon} ${styles.facebook}`}>
            <Facebook />
          </div>
          <div className={`${styles.socialIcon} ${styles.instagram}`}>
            <Instagram />
          </div>
          <div className={`${styles.socialIcon} ${styles.twitter}`}>
            <Twitter />
          </div>
          <div className={`${styles.socialIcon} ${styles.pinterest}`}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3 className={styles.title}>Enlaces útiles</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Cart</li>
          <li className={styles.listItem}>Man Fashion</li>
          <li className={styles.listItem}>Woman Fashion</li>
          <li className={styles.listItem}>Accessories</li>
          <li className={styles.listItem}>My Account</li>
          <li className={styles.listItem}>Order Tracking</li>
          <li className={styles.listItem}>Wishlist</li>
          <li className={styles.listItem}>Wishlist</li>
          <li className={styles.listItem}>Terms</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles.contactItem}>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div className={styles.contactItem}>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </div>
        <div className={styles.contactItem}>
          <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
        </div>
        <Image className={styles.payment} src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment" width={500} height={500} />
      </div>
    </div>
  );
};

export default Footer;
