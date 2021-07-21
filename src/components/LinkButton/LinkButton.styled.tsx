import styled from 'styled-components';
import { darken } from 'polished';

export const StyledLinkButton = styled.button`
  /* box-model */
  border: none;

  /* visual */
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  /* typography */
  text-align: left;
  color: ${({ theme }) => theme.white};

  &:hover,
  &:focus {
    /* typography */
    color: ${({ theme }) => darken(0.25, theme.white)};
  }

  &:focus {
    /* box-model */
    outline: 1px solid ${({ theme }) => theme.white};
  }

  &:disabled,
  &:disabled:hover {
    /* visual */
    opacity: 0.5;
    cursor: not-allowed !important;
    /* box-model */
    box-shadow: none;
  }
`