import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const styles = {
  container: {
    height: '60px',
    backgroundColor: 'light-blue',
    marginBottom: '20px',
  },
  language: {
    fontSize: '14px',
    cursor: 'pointer',
  },
  searchContainer: {
    border: '0.5px solid lightgray',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '25px',
    padding: '5px',
  },
  input: {
    border: 'none',
  },
  wrapper: {
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  center: {
    flex: 2,
    textAlign: 'center',
  },
  logo: {
    fontWeight: 'bold',
  },
  right: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuItem: {
    fontSize: '14px',
    cursor: 'pointer',
    marginLeft: '25px',
  },
};

const Navbar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.left}>
          <span style={styles.language}>EN</span>
          <div style={styles.searchContainer}>
            <input style={styles.input} />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </div>
        </div>
        <div style={styles.center}>
          <h1 style={styles.logo}>FL Automations</h1>
        </div>
        <div style={styles.right}>
          <div style={styles.menuItem}><p>REGISTER</p></div>
          <div style={styles.menuItem}><a href={"/login"}>SIGN IN</a></div>
          <div style={styles.menuItem}>
            <Badge badgeContent={5} color="primary" style={{ transform: 'translate(20px, -20px)' }} />
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;