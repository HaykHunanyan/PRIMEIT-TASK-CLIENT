import React from 'react';
import AuthorizationTemplate from '../../components/templates/authorization/authorization.template';
import ThankYou from '../../components/organisms/thank-you';

const ThankYouPage = () => {
  return (
    <AuthorizationTemplate>
      <ThankYou />
    </AuthorizationTemplate>
  );
};

export default ThankYouPage;
