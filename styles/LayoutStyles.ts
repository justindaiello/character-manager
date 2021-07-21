import styled from 'styled-components';

export const StyledAppContainer = styled.main`
  display: grid;
  grid-template-columns: 175px 1fr;
  height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.primary} 50%, ${theme.pink})`};
`;
