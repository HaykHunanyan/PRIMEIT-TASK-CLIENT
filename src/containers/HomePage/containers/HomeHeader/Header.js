import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Dropdown, Link, Row, Menu as StyledMenu, ContentWrapper } from 'components/atoms';
import { getUserData } from 'selectors/users';
import User from 'components/atoms/Partials/User';
import UserIcon from 'assets/images_svg/userlogo.svg';
import './headerWrapper.scss';

const Header = ({ history, location }) => {
  const [linkTo, setLinkTo] = useState({ path: '/questions', text: 'Create question' });
  const [cartModal, setCartModal] = useState({ addOrder: false });
  const isAuth = !!useSelector(getUserData);

  useEffect(() => {
    const splitPath = location.pathname.split('/');
    if (splitPath[1] === 'questions') setLinkTo({ ...linkTo, path: '/', text: 'View Questions' });
    else setLinkTo({ ...linkTo, path: '/questions', text: 'Create question' });
  }, [location]);

  return (
    <div className='homepage_header_top_content'>
      <ContentWrapper>
        <div className='homepage_header_top'>
          {isAuth ? (
            <Row>
              <User setCartModal={setCartModal} cartModal={cartModal} />
            </Row>
          ) : (
            <>
              <div className='homepage_header_right_section'>
                <Link to={linkTo.path}>
                  <Button type='primary' width='300px' br={50} height='50px'>
                    {linkTo.text}
                  </Button>
                </Link>
              </div>
              <div className='homepage_header_user_drop'>
                <Dropdown
                  overlay={() => (
                    <StyledMenu width='200px' padding='15px' fz={18} fw={500} color='#16322F'>
                      <StyledMenu.Item onClick={() => history.push(linkTo.path)} key='sign-in'>
                        {linkTo.text}
                      </StyledMenu.Item>
                    </StyledMenu>
                  )}
                  placement='bottomRight'
                  arrow
                  trigger={['click']}
                >
                  <img src={UserIcon} alt='userIcon' />
                </Dropdown>
              </div>
            </>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default withRouter(Header);
