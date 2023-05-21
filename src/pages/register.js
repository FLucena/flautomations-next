import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("") center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
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
  },
  input: {
    flex: 1,
    minWidth: '40%',
    margin: '20px 10px 0',
    padding: '10px',
  },
  agreement: {
    fontSize: '12px',
    margin: '20px 0',
  },
  button: {
    marginTop: '100px',
    width: '40%',
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
      <Navbar />
        <div style={styles.wrapper}>
          <div style={styles.container}>
          <h1 style={styles.title}>CREATE AN ACCOUNT</h1>
          <form style={styles.form}>
            <input style={styles.input} placeholder="name" />
            <input style={styles.input} placeholder="last name" />
            <input style={styles.input} placeholder="username" />
            <input style={styles.input} placeholder="email" />
            <input style={styles.input} placeholder="password" />
            <input style={styles.input} placeholder="confirm password" />
            <span style={styles.agreement}>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button style={styles.button}>CREATE</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
