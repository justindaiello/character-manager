import * as React from 'react';
import { render } from '@utils/test-utils';

import Button from '../Button';

const props = {
  onClick: jest.fn(),
  small: false,
  children: 'Darkwing Copperkettle',
};

describe('<Button />', () => {
  it('should render the correct text', () => {
    const { getByText } = render(<Button {...props} />);
    expect(getByText(/darkwing copperkettle/i)).toBeInTheDocument();
  });
});
