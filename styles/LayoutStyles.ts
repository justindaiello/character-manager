import styled from 'styled-components';

export const StyledAppContainer = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.primary} 50%, ${theme.pink})`};
`;
