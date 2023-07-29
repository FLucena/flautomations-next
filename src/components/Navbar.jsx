import Head from 'next/head';
import Link from 'next/link';
import Search from './Search';

const Navbar = () => {
  const styles = {
    container: {
      backgroundColor: 'lightblue',
      marginBottom: '20px',
      minWidth: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },
    language: {
      fontSize: '14px',
      cursor: 'pointer',
      flex: '1',
    },
    wrapper: {
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    left: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '1',
    },
    center: {
      textAlign: 'center',
      flex: '1',
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: '1',
    },
    menuItem: {
      fontSize: '14px',
      cursor: 'pointer',
      marginLeft: '25px',
      textDecoration: 'none',
      color: 'white',
    },
  };

  return (
    <>
      <Head>
        <style>
          {`
            .input::placeholder {
              color: #9e9ea7;
            }
            .input:focus, input:hover {
              outline: none;
              border-color: rgba(234,76,137,0.4);
              background-color: #fff;
              box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            }
          `}
        </style>
      </Head>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <div style={styles.left}>
            <span style={styles.language}>EN</span>
            <Search />
          </div>
          <div style={styles.center}>
            <h1 style={styles.logo}>
              <Link href="/" style={styles.removeLinkStyle}>
                FL Automations
              </Link>
            </h1>
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
    </>
  );
};

export default Navbar;