import { reboot } from 'styled-reboot';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  ${reboot}

  html,
  body {
    /* box-model */
    padding: 0;
    margin: 0;

    /* typography */
    font-family: Goldman, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    /* visual */
    background: ${({ theme }) => theme.primary};
  }

  a {
    /* typography */
    color: inherit;
    text-decoration: none;
  }

  * {
    /* box-model */
    box-sizing: border-box;
  }

   /* Custom toast override */
  .Toastify__toast--info {
    /* visual */
    background: ${({ theme }) => theme.pink};
  }
`;

export default GlobalStyle;
