import axios from 'axios';
import theme from '@styles/theme';
import { toast } from 'react-toastify';
import { Provider } from 'react-redux';
import GlobalStyle from '@styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import store from '../src/appReducers';

import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  /**
   * @description
   * Intercepts axios requests
   * Anything status code in the 2xx gets causes the return response to trigger
   * Anything that falls outside the 2xx range will log the user out and remove their token
   */
  axios.interceptors.response.use(
    response => {
      return response;
    },
    () => {
      localStorage.removeItem('token');
      toast.info('Invalid token, please log in');
    }
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer autoClose={2000} position='top-right' />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
