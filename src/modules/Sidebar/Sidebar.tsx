import React from 'react';

import { LoginModal } from '@components/Modals';
import { StyledSidebar } from './Sidebar.styled';
import LinkButton from '@components/LinkButton/LinkButton';

function Sidebar() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <React.Fragment>
      <StyledSidebar>
        <p>Character Manager</p>
        <LinkButton onClick={() => setShowModal(!showModal)}>Log In</LinkButton>
      </StyledSidebar>
      <LoginModal open={showModal} setShowModal={setShowModal} />
    </React.Fragment>
  );
}

export default Sidebar;
