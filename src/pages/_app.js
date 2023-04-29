import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
