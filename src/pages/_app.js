import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import Head from '../components/Head'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
 }) {

  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Head />
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;