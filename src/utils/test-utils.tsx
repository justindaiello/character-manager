import * as React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';

import store from '../appReducers';

// TODO: add to custom render
export const defaultState = {
  user: {
    name: 'Luke Skywalker',
  },
};

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
