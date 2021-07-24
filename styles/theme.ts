import { rem } from 'polished';

const theme = {
  // *********************
  // ** Color Variables **
  // *********************
  primary: '#3c2370',
  pink: '#e75aa1',
  black: '#111219',
  white: '#fff',
  darkBlue: '#685bd5',
  lightBlue: '#20add1',
  danger: '#bf0a30',
  warning: '#edcc65',
  gray: '#bcc8d9',
  disabled: '#eef3f9',

  // ****************
  // ** Typography **
  // ****************

  // Body
  fontSizeXs: rem(10),
  fontSizeSm: rem(12),
  fontSizeMd: rem(14),
  fontSizeLg: rem(16),
  fontSizeXl: rem(20),

  // Headers
  h1FontSize: rem(40),
  h2FontSize: rem(34),
  h3FontSize: rem(28),
  h4FontSize: rem(24),
  h5FontSize: rem(20),
  h6FontSize: rem(16),

  // *************************
  // ** Borders and Shadows **
  // *************************

  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  boxShadowBottom: '0px 3px 6px rgba(156, 156, 156, 0.5)',
  borderRadiusLg: '30px',
  borderRadius: '9px',
  borderRadiusSm: '6px',
};

export default theme;
