import Mobile from "./responsive";
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
    ...Mobile({ width: '75%' }),
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
    padding: '15px 20px',
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
    <div style={styles.container}>
      <Navbar />
      <div style={styles.wrapper}>
        <h1 style={styles.title}>SIGN IN</h1>
        <form style={styles.form}>
          <input style={styles.input} placeholder="username" />
          <input style={styles.input} placeholder="password" />
          <button style={styles.button}>LOGIN</button>
          <a style={styles.link}>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a style={styles.link}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
