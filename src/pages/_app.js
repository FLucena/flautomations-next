import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import Head from '../components/Head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as contentEn from '../components/content-en';
import * as contentEs from '../components/content-es';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
 }) {
  const defaultLang = 'es';
  const content = defaultLang === 'en' ? contentEn : contentEs;

  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Head />
        <Navbar lang={defaultLang} />
        <Component {...pageProps} />
        <Footer lang={defaultLang} />
        <ToastContainer />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;