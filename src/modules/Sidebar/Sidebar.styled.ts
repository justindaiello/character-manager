import styled from 'styled-components'; 

export const StyledSidebar = styled.nav`
  /* box-model */
  padding: 1rem;
  border-right: 1px solid ${({ theme }) => theme.black};
  box-shadow: ${({ theme }) => theme.boxShadow};

  /* typography */
  color: ${({ theme }) => theme.white};

  /* positioning */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`