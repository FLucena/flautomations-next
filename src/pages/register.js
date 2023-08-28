import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("") center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: '0 auto',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '20px',
    backgroundColor: 'white',
  },
  title: {
    fontSize: '24px',
    fontWeight: 300,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: '5px',
  },
  input: {
    flex: 1,
    margin: '20px 10px 0',
    padding: '10px',
    width: '30vh',
  },
  agreement: {
    fontSize: '12px',
    margin: '20px 0',
  },
  button: {
    marginTop: '20px',
    width: '100%',
    border: 'none',
    padding: '15px 20px',
    backgroundColor: 'teal',
    color: 'white',
    cursor: 'pointer',
  },
};

const Register = () => {
  return (
    <>
      <Navbar lang={defaultLang}/>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <h1 style={styles.title}>CREAR UNA CUENTA</h1>
          <form style={styles.form}>
            <input style={styles.input} placeholder="Nombre" />
            <input style={styles.input} placeholder="Apellido" />
            <input style={styles.input} placeholder="Nombre de usuario" />
            <input style={styles.input} placeholder="Correo electrónico" />
            <input style={styles.input} placeholder="Contraseña" />
            <input style={styles.input} placeholder="Confirmar contraseña" />
            <span style={styles.agreement}>
              Al crear una cuenta, acepto el procesamiento de mis datos personales de acuerdo con la <b>POLÍTICA DE PRIVACIDAD</b>
            </span>
            <button style={styles.button}>CREAR</button>
          </form>
        </div>
      </div>
      <Footer lang={defaultLang}/>
    </>
  );
};

export default Register;
