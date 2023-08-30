import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const LoginPage = () => {
  const defaultLang = "es";
  return (
    <>
      <Navbar lang={defaultLang}/>
        <Login lang={defaultLang}/>
      <Footer lang={defaultLang}/>
    </>
  );
};

export default LoginPage;
