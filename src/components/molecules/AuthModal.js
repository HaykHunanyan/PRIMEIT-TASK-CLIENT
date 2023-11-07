import React from 'react';
import styled from 'styled-components';
import SignIn from '../organisms/sign-in/sign-in';

const AuthModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(8, 26, 51, 0.8);
  z-index: 300;
`;

const AuthModal = ({ purchaseData }) => {
  return (
    <AuthModalWrapper>
      <SignIn purchaseData={purchaseData} />
    </AuthModalWrapper>
  );
};

export default AuthModal;
