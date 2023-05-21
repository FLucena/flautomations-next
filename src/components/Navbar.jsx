import Link from 'next/link';

const styles = {
  container: {
    height: '60px',
    backgroundColor: 'lightblue',
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
    outline: 'none',
    marginLeft: '5px',
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
    fontSize: '24px',
    margin: '0',
    color: 'white',
    
  },
  removeLinkStyle: {
    textDecoration: 'none',
    color: 'black',
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
    textDecoration: 'none',
    color: 'white',
  },
};

const Navbar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.left}>
          <span style={styles.language}>EN</span>
          <div style={styles.searchContainer}>
            <input style={styles.input} placeholder="Search" />
          </div>
        </div>
        <div style={styles.center}>
          <h1 style={styles.logo}> <Link href="/" style={styles.removeLinkStyle}>FL Automations</Link></h1>
        </div>
        <div style={styles.right}>
          <div style={styles.menuItem}>
            <Link href="/register" style={styles.removeLinkStyle}>
              REGISTER
            </Link>
          </div>
          <div style={styles.menuItem}>
            <Link href="/login" style={styles.removeLinkStyle}>
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;