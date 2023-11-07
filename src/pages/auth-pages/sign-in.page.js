import React from 'react';
import AuthorizationTemplate from '../../components/templates/authorization/authorization.template';
import SignIn from '../../components/organisms/sign-in/sign-in';

const SignInPage = () => {
  return (
    <AuthorizationTemplate>
      <SignIn />
    </AuthorizationTemplate>
  );
};

export default SignInPage;
