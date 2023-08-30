import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";

const SignUpPage = () => {
  const defaultLang = "es";
  return (
    <>
      <Navbar lang={defaultLang}/>
        <Signup lang={defaultLang}/>
      <Footer lang={defaultLang}/>
    </>
  );
};

export default SignUpPage;