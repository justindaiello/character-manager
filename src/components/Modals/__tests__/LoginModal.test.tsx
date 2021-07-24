import * as React from 'react';
import { LoginModal } from '..';
import { render } from '@utils/test-utils';
import userEvent from '@testing-library/user-event';

const props = {
  setShowModal: jest.fn(),
  open: true,
};

describe('<LoginModal />', () => {
  it('displays errors for empty form fields', () => {
    const { getByRole, getByText } = render(<LoginModal {...props} />);
    userEvent.click(getByRole('button', { name: /log in/i }));

    expect(getByText(/email must not be blank/i)).toBeInTheDocument();
    expect(getByText(/password must not be blank/i)).toBeInTheDocument();
  });
});
