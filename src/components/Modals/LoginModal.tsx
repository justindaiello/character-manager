import React from 'react';
import axios from 'axios';
import { isEmpty } from 'ramda';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-responsive-modal';

import Input from '@components/Input';
import Button from '@components/Button';
import authActions from '@modules/Sidebar/actions';
import { StyledFormGroup, StyledLoginForm, StyledErrorSpan } from './LoginModal.styled';

type LoginModalProps = {
  open: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormProps = {
  email?: string;
  password?: string;
};

function LoginModal({ setShowModal, open }: LoginModalProps) {
  const dispatch = useDispatch();
  const [errors, setErrors] = React.useState<FormProps>({});
  const [formData, setFormData] = React.useState<FormProps>({
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
   * Iterate through form data
   * add error message to object if field is empty
   * Set error state if errors
   * return form obj
   */
  function validateData(data: object): object {
    let errorObj: FormProps = {};

    Object.entries(data).forEach(([name, value]) => {
      if (!value) errorObj[name] = `${name} must not be blank`;
    });

    if (!isEmpty(errorObj)) {
      setErrors(errorObj);
    }

    return errorObj;
  }

  /**
   * @description
   * Form submit handler to log in
   * Validates form fields
   * Grabs form values from state and submits to the api
   * Closes modal and displays toast on success
   * TODO: Error handling
   */
  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();

    let validation = validateData(formData);

    if (isEmpty(validation)) {
      setErrors({});

      try {
        const resp = await axios.post('/api/v1/login', formData);

        if (resp?.data.token) {
          localStorage.setItem('token', resp.data.token);
          dispatch(authActions.setUserInfo(resp.data));
          setShowModal(false);
          toast.info('Successfully logged in');
        }
      } catch (err: unknown) {
        // TODO: handle server error
        if (axios.isAxiosError(err)) {
          console.log('[err]', err.response?.data);
        } else {
          // handle unknown here
        }
      }
    }
  }

  return (
    <Modal onClose={() => setShowModal(false)} open={open} center>
      <h1>Log in</h1>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <label htmlFor='email'>Email Address</label>
          <Input
            placeholder='camus@books.com'
            type='email'
            name='email'
            onChange={handleChange}
            error={errors.email}
            value={formData.email}
          />
          {errors.email && <StyledErrorSpan>{errors.email}</StyledErrorSpan>}
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor='password'>Password</label>
          <Input
            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;'
            type='password'
            name='password'
            onChange={handleChange}
            error={errors.password}
            value={formData.password}
          />
          {errors.password && <StyledErrorSpan>{errors.password}</StyledErrorSpan>}
        </StyledFormGroup>
        <Button type='submit'>Log In</Button>
      </StyledLoginForm>
    </Modal>
  );
}

export default LoginModal;
