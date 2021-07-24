import styled from 'styled-components';

const Input = styled.input`
  /* box-model */
  width: 100%;
  height: 40px;
  padding: 0.375rem;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadiusSm};
  border-color: ${({ theme, error }) => (error ? theme.danger : theme.primary)};

  /* positioning */
  display: block;

  /* visual */
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.white};
  transition: border-color 0.2s ease-in-out box-shadow 0.2s ease-in-out;

  /* typography */
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizeLg};

  &::placeholder {
    /* visual */
    color: ${({ theme }) => theme.gray};
    opacity: 1; /* Override Firefox's unusual default opacity; */
  }

  &:focus {
    /* box-model */
    box-shadow: 0 0 0 0.1rem rgba(59, 35, 112, 0.7);
    border-color: ${({ theme }) => theme.primary};
    outline: 0;
  }

  &:disabled,
  &[readonly] {
    /* visual */
    cursor: not-allowed !important;
    background-color: ${({ theme }) => theme.disabled};
    /* iOS fix for unreadable disabled content; */
    opacity: 1;
  }
`;

export default Input;
