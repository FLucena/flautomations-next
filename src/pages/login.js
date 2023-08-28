import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("") center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  wrapper: {
    width: '100%',
    maxWidth: '400px',
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
    margin: '10px 0',
    padding: '10px',
  },
  button: {
    width: '100%',
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

const LoginPage = () => {
  return (
    <>
      <Navbar lang={defaultLang}/>
        <Login />
      <Footer lang={defaultLang}/>
    </>
  );
};

export default LoginPage;
