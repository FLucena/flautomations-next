import React, { Suspense, lazy } from "react";
const Login = lazy(() => import("../components/Login"));

const LoginPage = () => {
  const defaultLang = "es";
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Login lang={defaultLang} />
      </Suspense>
    </>
  );
};

export default LoginPage;