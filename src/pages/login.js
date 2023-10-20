import React, { Suspense, lazy } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = lazy(() => import("../components/Login"));

const LoginPage = () => {
  const defaultLang = "es";
  return (
    <>
      <Navbar lang={defaultLang} />
      <Suspense fallback={<div>Loading...</div>}>
        <Login lang={defaultLang} />
      </Suspense>
      <Footer lang={defaultLang} />
    </>
  );
};

export default LoginPage;