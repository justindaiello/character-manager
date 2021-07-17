import styled, { css, ThemeProps, FlattenInterpolation } from 'styled-components';
import { darken } from 'polished';

import { ButtonProps, ButtonEnums } from './Button';

/**
 * **********************
 * Button Size CSS Blocks
 * **********************
 */

const buttonSmall = css`
  /* box-model */
  padding: 0.5rem 1rem;

  /* typography */
  font-size: ${({ theme }) => theme.fontSizeMd};
  line-height: ${({ theme }) => theme.fontSizeMd};
  letter-spacing: 1.5px;
`;

const buttonMedium = css`
  /* box-model */
  padding: 0.725rem 1.5rem;

  /* typography */
  font-size: ${({ theme }) => theme.fontSizeLg};
  line-height: ${({ theme }) => theme.fontSizeLg};
  letter-spacing: 1.5px;
`;

/**
 * *************************
 * Button Variant CSS Blocks
 * *************************
 */

const buttonPrimary = css`
  /* box-model */
  border: none;
  background: ${({ theme }) => theme.primary};

  /* visual */
  color: ${({ theme }) => theme.white};

  &:hover,
  &:focus {
    /* visual */
    background: ${({ theme }) => darken(0.1, theme.primary)};
  }
`;

const buttonSecondary = css`
  /* box-model */
  border: ${({ theme }) => `3px solid ${theme.primary}`};

  /* visual */
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.primary};

  &:hover {
    /* visual */
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => darken(0.1, theme.primary)};
  }
`;

const buttonWarning = css`
  /* box-model */
  border: none;
  background: ${({ theme }) => theme.warning};

  /* visual */
  color: ${({ theme }) => theme.white};

  &:hover,
  &:focus {
    /* visual */
    background: ${({ theme }) => darken(0.1, theme.warning)};
  }
`;

const buttonDanger = css`
  /* box-model */
  border: none;
  background: ${({ theme }) => theme.danger};

  /* visual */
  color: ${({ theme }) => theme.white};

  &:hover,
  &:focus {
    /* visual */
    background: ${({ theme }) => darken(0.1, theme.danger)};
  }
`;

/**
 * Parse variant type and return appropriate css block
 * @param {ButtonEnums} variant - variant enum
 * @returns {FlattenInterpolation}
 */

function parseVariant(variant: ButtonEnums): FlattenInterpolation<ThemeProps<string>> {
  switch (variant) {
    case ButtonEnums.SECONDARY: {
      return buttonSecondary;
    }
    case ButtonEnums.WARNING: {
      return buttonWarning;
    }
    case ButtonEnums.DANGER: {
      return buttonDanger;
    }
    default: {
      return buttonPrimary;
    }
  }
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ small }) => (small ? buttonSmall : buttonMedium)}

  ${({ variant }) => parseVariant(variant)}

  /* box-model */
  border-radius: ${({ theme }) => theme.borderRadiusLg};

  /* typography */
  font-weight: 600;

  /* positioning */
  display: inline-block;

  /* visual */
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:disabled,
  &:disabled:hover {
    /* visual */
    opacity: 0.5;
    cursor: not-allowed !important;
    /* box-model */
    box-shadow: none;
  }
`;
