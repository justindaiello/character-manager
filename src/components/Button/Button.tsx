import * as React from 'react';

import { StyledButton } from './Button.styled';

export enum ButtonEnums {
  PRIMARY,
  SECONDARY,
  WARNING,
  DANGER
}

export type ButtonProps = {
  small?: boolean,
  variant?: ButtonEnums,
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  small,
  onClick,
  children,
  variant = ButtonEnums.PRIMARY,
  ...rest
}) => {
  return (
    <StyledButton
      small={small}
      variant={variant}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export default Button;