import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("") center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '25%',
    padding: '20px',
    backgroundColor: 'white',
  },
  title: {
    fontSize: '24px',
    fontWeight: 300,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    flex: 1,
    minWidth: '40%',
    margin: '10px 0',
    padding: '10px',
  },
  button: {
    width: '40%',
    border: 'none',
    padding: '8px 10px',
    backgroundColor: 'teal',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  link: {
    margin: '5px 0',
    fontSize: '12px',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

const Login = () => {
  return (
    <>
      <Navbar />
        <div style={styles.container}>
          <div style={styles.wrapper}>
            <h1 style={styles.title}>INICIAR SESIÓN</h1>
            <form style={styles.form}>
              <input style={styles.input} placeholder="Usuario" />
              <input style={styles.input} placeholder="Contraseña" />
              <button style={styles.button}>INICIAR SESIÓN</button>
              <a style={styles.link}>NO RECUERDO LA CONTRASEÑA</a>
              <a style={styles.link}>CREAR UNA NUEVA CUENTA</a>
            </form>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Login;
