import React from 'react'

import { StyledLinkButton } from './LinkButton.styled';

type LinkButtonProps = {
  children: React.ReactNode;
  onClick: (e?: React.MouseEvent) => void;
}

function LinkButton({ onClick, children, ...rest }: LinkButtonProps) {
  return (
    <StyledLinkButton onClick={onClick} {...rest}>
      {children}
    </StyledLinkButton>
  )
}

export default LinkButton
