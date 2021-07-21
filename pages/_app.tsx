import axios from 'axios';
import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';

axios.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('[here for err]', error.response.status);
    return Promise.reject(error);
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} position='top-right' />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
