import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';

type RenderProps = {
  ui: React.ReactElement
}

const customRender = ({ ui }: RenderProps) => {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {ui}
      </ThemeProvider>
    )
  }
}

export * from '@testing-library/react'

export { customRender as render };