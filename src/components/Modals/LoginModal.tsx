import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-responsive-modal';

import Input from '@components/Input';
import Button from '@components/Button';
import authActions from '@modules/Sidebar/actions';
import { StyledFormGroup, StyledLoginForm } from './LoginModal.styled';

type LoginModalProps = {
  open: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginModal({ setShowModal, open }: LoginModalProps) {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  /**
   * @description
   * On change handler for both inputs
   * Associates name and value from e.target and sets it into state
   */
  function handleChange(e: React.SyntheticEvent): void {
    let { name, value } = e.target as HTMLInputElement;

    setFormData(prevState => {
      return { ...prevState, [name]: value };
    });
  }

  /**
   * @description
   * Form submit handler to log in
   * Grabs form values from state and submits to the api
   * Closes modal and displays toast on success
   * TODO: Error handling
   */
  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();

    try {
      const resp = await axios.post('/api/v1/login', formData);

      if (resp?.data.token) {
        localStorage.setItem('token', resp.data.token);
        dispatch(authActions.setUserInfo(resp.data));
        setShowModal(false);
        toast.info('Successfully logged in');
      }
    } catch (err) {
      console.log('[err]', err.response.data);
    }
  }

  return (
    <Modal onClose={() => setShowModal(false)} open={open} center>
      <h1>Log in</h1>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <label htmlFor='email'>Email Address</label>
          <Input type='email' name='email' onChange={handleChange} />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor='password'>Password</label>
          <Input type='password' name='password' onChange={handleChange} />
        </StyledFormGroup>
        <Button type='submit'>Log In</Button>
      </StyledLoginForm>
    </Modal>
  );
}

export default LoginModal;
