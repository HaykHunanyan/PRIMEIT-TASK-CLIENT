import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { guest } from 'constants/roles';
import logo from 'assets/images/homepage_logo.png';

const LogoImg = styled.img`
  cursor: auto;
  width: 50px;
  height: 50px;
  margin: ${props => `${props.margin}!important`};
`;

LogoImg.propTypes = {
  margin: propTypes.string,
};

LogoImg.defaultProps = {
  margin: '0 0 0 0',
};

const Logo = ({ history, currentRole }) => {
  return (
    <LogoImg
      src={logo}
      margin='10px 0px 25px 12px'
      style={{ cursor: currentRole === guest && 'pointer' }}
      onClick={() => {
        currentRole === guest && history.push({ pathname: '/home' });
      }}
    />
  );
};

export default withRouter(Logo);
