import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  button {
    /* box-model */
    margin: 0 auto;

    /* positioning */
    display: block;
  }
`;

export const StyledFormGroup = styled.div`
  /* box-model */
  margin-bottom: 1.25rem;

  /* positioning */
  position: relative;

  label {
    /* box-model */
    margin-bottom: 0.25rem;
  }
`;

export const StyledErrorSpan = styled.span`
  /* typography */
  color: ${({ theme }) => theme.danger};

  /* positioning */
  position: absolute;

  &:first-letter {
    /* typography */
    text-transform: capitalize;
  }
`;
