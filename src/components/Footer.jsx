import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';

const styles = {
  container: {
    display: 'flex',
  },
  'container > div': {
    padding: '20px',
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    marginBottom: '20px',
  },
  desc: {
    marginBottom: '20px',
  },
  'social-container': {
    display: 'flex',
  },
  'social-icon': {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
  },
  'social-icon > svg': {
    fontSize: '20px',
  },
  'social-icon.facebook': {
    backgroundColor: '#3b5999',
  },
  'social-icon.instagram': {
    backgroundColor: '#e4405f',
  },
  'social-icon.twitter': {
    backgroundColor: '#55acee',
  },
  'social-icon.pinterest': {
    backgroundColor: '#e60023',
  },
  center: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '30px',
  },
  list: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
  },
  'list-item': {
    width: '50%',
    marginBottom: '10px',
  },
  right: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  'contact-item': {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  'contact-item > svg': {
    marginRight: '10px',
  },
  payment: {
    width: '50%',
    alignSelf: 'center',
    marginTop: '20px',
  },
};


const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h1 style={styles.logo}>FL Automations.</h1>
        <p style={styles.desc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div style={styles.socialContainer}>
        </div>
      </div>
      <div style={styles.center}>
        <h3 style={styles.title}>Enlaces útiles</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><HomeIcon/></li>
          <li style={styles.listItem}>Cart</li>
          <li style={styles.listItem}>Man Fashion</li>
          <li style={styles.listItem}>Woman Fashion</li>
          <li style={styles.listItem}>Accessories</li>
          <li style={styles.listItem}>My Account</li>
          <li style={styles.listItem}>Order Tracking</li>
          <li style={styles.listItem}>Wishlist</li>
          <li style={styles.listItem}>Wishlist</li>
          <li style={styles.listItem}>Terms</li>
        </ul>
      </div>
      <div style={styles.right}>
        <h3 style={styles.title}>Contact</h3>
        <div style={styles.contactItem}>
        </div>
        <div style={styles.contactItem}>
        </div>
        <div style={styles.contactItem}>
        </div>
        <Image style={styles.payment} src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment" width={232} height={25} />
      </div>
    </div>
  );
};

export default Footer;