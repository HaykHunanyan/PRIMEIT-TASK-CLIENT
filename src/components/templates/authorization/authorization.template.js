import React from 'react';
import styled from 'styled-components';
import { AuthContent, AuthHeader } from '../../atoms/Partials';

const AuthWrapperContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const AuthorizationTemplate = ({ children }) => {
  return (
    <AuthWrapperContainer>
      <AuthHeader />
      <AuthContent>{children}</AuthContent>
    </AuthWrapperContainer>
  );
};

export default AuthorizationTemplate;
