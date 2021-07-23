import * as React from 'react';
import { render } from '@utils/test-utils';

import theme from '@styles/theme';
import Button, { ButtonEnums } from '../Button';

const props = {
  onClick: jest.fn(),
  small: false,
  children: 'Darkwing Copperkettle',
};

describe('<Button />', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Button {...props} />);
    expect(getByText(props.children)).toBeInTheDocument();
  });

  it('applies the small variant', () => {
    const { getByRole } = render(<Button {...props} small />);
    expect(getByRole('button', { name: props.children })).toHaveStyle({
      padding: '0.5rem 1rem',
    });
  });

  it('defaults to the primary variant and regular size', () => {
    const { getByRole } = render(<Button {...props} />);
    expect(getByRole('button', { name: props.children })).toHaveStyle({
      padding: '0.725rem 1.5rem',
      background: theme.primary,
    });
  });

  it('applies the secondary variant', () => {
    const { getByRole } = render(<Button {...props} variant={ButtonEnums.SECONDARY} />);
    expect(getByRole('button', { name: props.children })).toHaveStyle({
      background: theme.white,
    });
  });

  it('applies the danger variant', () => {
    const { getByRole } = render(<Button {...props} variant={ButtonEnums.DANGER} />);
    expect(getByRole('button', { name: props.children })).toHaveStyle({
      background: theme.danger,
    });
  });

  it('applies the warning variant', () => {
    const { getByRole } = render(<Button {...props} variant={ButtonEnums.WARNING} />);
    expect(getByRole('button', { name: props.children })).toHaveStyle({
      background: theme.warning,
    });
  });
});
