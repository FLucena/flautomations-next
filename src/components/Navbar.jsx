import Link from 'next/link';
import Head from 'next/head';

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
    searchContainer: {
      border: '0.5px solid lightgray',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '25px',
      padding: '5px',
      flex: '1',
    },
    input: {
      border: 'none',
      outline: 'none',
      marginLeft: '5px',
      fontSize: '14px',
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
        <style>{`
          .container {
            height: 70px;
          }
          .searchContainer {
            margin-left: 10px;
          }
          .input {
            margin-left: 5px;
            font-size: 12px;
          }
          .wrapper {
            padding: 10px;
          }
          .left {
            display: none;
          }
          .center {
            flex: 1;
            text-align: left;
          }
          .right {
            justify-content: flex-start;
          }
          .logo {
            font-size: 20px;
          }
          .menuItem {
            margin-left: 15px;
            font-size: 12px;
          }
        `}</style>
      </Head>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <div style={styles.left}>
            <span style={styles.language}>EN</span>
            <div style={styles.searchContainer}>
              <input style={styles.input} placeholder="Buscar" />
            </div>
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
