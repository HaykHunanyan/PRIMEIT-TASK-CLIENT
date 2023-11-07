import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserData, getUserRole } from 'selectors/users';
import styled, { css } from 'styled-components';
import { Button, Paragraph } from 'components/atoms';
import User from 'components/atoms/Partials/User';
import configureStore from 'configs/configureStore';
import { userLogout } from 'actions/users';
import PlnatsLogo from 'assets/images/homepage_logo.png';
import { guest } from 'constants/roles';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 88px;
  padding: 0 30px;
  background-color: #ffffff;
  border-bottom: 2px solid #e8eef4;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  .head_logo {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 24px;
  }

  ${props =>
    props.isMobile &&
    css`
      height: 75px;
      padding: 0 24px;
      svg,
      img:not(.head_logo) {
        width: 20px;
        margin: 0;
      }
    `}

  @media screen and (max-width: 992px) {
    .anticon-arrow-left {
      display: none;
    }
  }
`;

const DashboardHeader = ({ history, isMobile }) => {
  const currentRole = getUserRole(configureStore.getState()) || guest;
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();

  const headerContent = {
    guest: <User />,
    admin: (
      <>
        <Paragraph
          margin='0px'
          fz={16}
          type='secondary'
          size_type='responsive'
          flex={true}
        >{`${userData.firstName} ${userData.lastName}`}</Paragraph>
        <Button
          type='primary'
          margin='0 0 0 30px'
          onClick={() => {
            const myPromise = new Promise((resolve, reject) => {
              dispatch(userLogout.request());
            });
            myPromise
              .then(() => {
                history.push('/');
              })
              .catch(() => {});
          }}
        >
          Log out
        </Button>
      </>
    ),
  };

  return (
    <>
      <HeaderWrapper isMobile={isMobile}>
        {headerContent[currentRole]}
        {isMobile && <img src={PlnatsLogo} alt='logo' className='head_logo' />}
      </HeaderWrapper>
    </>
  );
};

export default withRouter(DashboardHeader);
