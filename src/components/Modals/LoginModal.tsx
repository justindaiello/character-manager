import React from 'react'
import axios from 'axios';
import { Modal } from 'react-responsive-modal';

import Input from '@components/Input';
import Button from '@components/Button';
import { StyledFormGroup, StyledLoginForm } from './LoginModal.styled';

type LoginModalProps = {
  open: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

function LoginModal({ setShowModal, open }: LoginModalProps) {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  function handleChange(e): void {
    let { name, value } = e.target;

    setFormData(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  async function handleSubmit(e): Promise<void> {
    e.preventDefault()

    try {
      const resp = await axios.post('/api/v1/login', formData)

      if (resp?.data.token) {
        localStorage.setItem("token", resp.data.token)
        setShowModal(false);
      }
    } catch (err) {
      console.log('[err]', err.response.data)
    }
  }

  return (
    <Modal onClose={() => setShowModal(false)} open={open} center>
      <h1>Log in</h1>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <label htmlFor="email">Email Address</label>
          <Input type="email" name="email" onChange={handleChange} />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="password">Password</label>
          <Input type="password" name="password" onChange={handleChange} />
        </StyledFormGroup>
        <Button type="submit">Log In</Button>
      </StyledLoginForm>
    </Modal>
  )
}

export default LoginModal
