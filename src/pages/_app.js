import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ChakraProvider>
  );
}

export default MyApp;