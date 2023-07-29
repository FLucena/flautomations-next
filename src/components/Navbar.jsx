import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    searchButton: {
      border: '1px solid #9e9ea7',
      background: 'transparent',
      padding: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      height: '2rem',
      width: '2rem',
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
              border-color: rgba(76, 137, 234, 0.4);
              background-color: #fff;
              box-shadow: 0 0 0 4px rgb(76 137 234 / 10%);
            }
          `}
        </style>
      </Head>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <div style={styles.left}>
            <span style={styles.language}>EN</span>
              <Link href={`/searchPage`}>
                <button style={styles.searchButton}>
                  <svg aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                </button>
              </Link>
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