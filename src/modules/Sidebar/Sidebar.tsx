import React from 'react';
import { isEmpty } from 'ramda';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import { LoginModal } from '@components/Modals';
import { StyledSidebar } from './Sidebar.styled';
import LinkButton from '@components/LinkButton';

import authActions from './actions';
import { RootState } from '../../appReducers';

function Sidebar() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);
  const [showModal, setShowModal] = React.useState(false);

  function handleLogout(): void {
    localStorage.removeItem('token');
    dispatch(authActions.setUserInfo({ user: {}, token: '' }));
    toast.info('Successfully logged out');
  }

  function handleClick(): void {
    if (!!token) {
      return handleLogout();
    }

    return setShowModal(!showModal);
  }

  return (
    <React.Fragment>
      <StyledSidebar>
        <p>Character Manager</p>
        <LinkButton onClick={handleClick}>
          <span suppressHydrationWarning>{!token || isEmpty(token) ? 'Log In' : 'Log Out'}</span>
        </LinkButton>
      </StyledSidebar>
      <LoginModal open={showModal} setShowModal={setShowModal} />
    </React.Fragment>
  );
}

export default Sidebar;
