import axios from 'axios';
import React from 'react';
import { ReactDOM } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import { saveState } from '@utils/localStorage';

import store from '../src/appReducers';

import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

store.subscribe(() => {
  saveState(store.getState());
});

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
