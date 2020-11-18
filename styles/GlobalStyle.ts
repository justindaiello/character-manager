import { create } from 'domain';
import { reboot } from 'styled-reboot';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  ${reboot}

  /* TODO: Add more global styling */
  body {
    background: ${({ theme }) => theme.purple};
  }
`;

export default GlobalStyle;
