import * as React from 'react';

import { StyledTitle } from './Title.styled';

export type TitleProps = {
  as?: keyof JSX.IntrinsicElements;
  size?: string;
  children: string | React.ReactNode;
};

function Title({ children, as = 'h1', size }: TitleProps) {
  return (
    <StyledTitle suppressHydrationWarning as={as} size={size}>
      {children}
    </StyledTitle>
  );
}

export default Title;
