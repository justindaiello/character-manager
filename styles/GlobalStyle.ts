import { create } from 'domain';
import { createGlobalStyle } from 'styled-components';
import { reboot } from 'styled-reboot';

/**
 * Options that can get injected into the css reboot
 */
const options = {
  fontSizeBase: '10px',
};

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  ${reboot}

  /* TODO: Add more global styling */
`;

export default GlobalStyle;
