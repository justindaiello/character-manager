import styled from 'styled-components';

import { TitleProps } from './Title';
import { FontTypes } from '@styles/theme';

/**
 * Select font size based on size prop
 * @param {string} size - size prop, defaulted to medium
 * @param {FontTypes} theme - custom theme font sizes object
 * @returns {string} correct font size from the theme
 */
function parseFontSize(theme: FontTypes, size: string): string {
  switch (size) {
    case 'small': {
      return theme.h6FontSize;
    }
    case 'medium': {
      return theme.h4FontSize;
    }
    case 'large': {
      return theme.h2FontSize;
    }
    case 'xlarge': {
      return theme.h1FontSize;
    }
    default: {
      return theme.fontSizeLg;
    }
  }
}

export const StyledTitle = styled.h1<TitleProps>`
  /* box-model */
  display: block;
  /* typography */
  font-size: ${({ theme, size }) => parseFontSize(theme, size)};
  /* If we have an svg inside of the title then we put the text inside of a span and add margin*/
  span {
    /* box-model */
    margin-left: 1rem;
  }
`;
