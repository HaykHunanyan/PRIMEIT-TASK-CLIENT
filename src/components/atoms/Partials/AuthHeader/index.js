import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/homepage_logo.png';
import { Link } from '../../index';

const AuthHeaderContainer = styled.div`
  width: 100%;
  padding: 20px 150px;
  border-bottom: 1px solid #e8eef4;

  .auth_header_content {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    padding: 20px 30px;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

const AuthHeader = () => {
  return (
    <AuthHeaderContainer>
      <div className='auth_header_content max_container'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
    </AuthHeaderContainer>
  );
};

export default AuthHeader;
