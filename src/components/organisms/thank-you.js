import React from 'react';
import { withRouter } from 'react-router-dom';
import { Paragraph, Title } from '../atoms';
import { AuthCard } from '../atoms/Partials';

const ThankYou = ({ match, userEmail }) => {
  const email =
    typeof match.params.email === 'undefined' ? 'example@example.com' : match.params.email;
  return (
    <AuthCard type='shadowed'>
      <div className='auth_content_card_header'>
        <Title level={2}>Thanks for the registration!</Title>
      </div>
      <Paragraph>
        Your account has been created and a verification email has been sent to
        {userEmail ? (
          <span style={{ color: '#00dace' }}> {userEmail}.</span>
        ) : (
          <span style={{ color: '#00dace' }}> {email}.</span>
        )}
      </Paragraph>
    </AuthCard>
  );
};

export default withRouter(ThankYou);
