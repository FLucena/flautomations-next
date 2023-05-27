import Link from 'next/link';

const styles = {
  container: {
    backgroundColor: 'lightblue',
    marginBottom: '20px',
    width: '100%',
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
  '@media (max-width: 768px)': {
    container: {
      height: '70px', // Adjust the height for smaller screens
      width: '100%',
    },
    searchContainer: {
      marginLeft: '10px', // Adjust the margin for smaller screens
    },
    input: {
      marginLeft: '5px', // Adjust the margin for smaller screens
      fontSize: '12px', // Adjust the font size for smaller screens
    },
    wrapper: {
      padding: '10px', // Adjust the padding for smaller screens
    },
    left: {
      display: 'none', // Hide left content for smaller screens
    },
    center: {
      flex: 1, // Take full width for smaller screens
      textAlign: 'left', // Adjust the text alignment for smaller screens
    },
    right: {
      justifyContent: 'flex-start', // Adjust the content alignment for smaller screens
    },
    menuItem: {
      marginLeft: '15px', // Adjust the margin for smaller screens
    },
  },
};

const Navbar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.left}>
          <span style={styles.language}>EN</span>
          <div style={styles.searchContainer}>
            <input style={styles.input} placeholder="Buscar" />
          </div>
        </div>
        <div style={styles.center}>
          <h1 style={styles.logo}> <Link href="/" style={styles.removeLinkStyle}>FL Automations</Link></h1>
        </div>
        <div style={styles.right}>
          <div style={styles.menuItem}>
            <Link href="/register" style={styles.removeLinkStyle}>
              REGISTRARME
            </Link>
          </div>
          <div style={styles.menuItem}>
            <Link href="/login" style={styles.removeLinkStyle}>
              INICIAR SESION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;