import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserData, logoutError } from 'selectors/users';
import { Dropdown, Menu as StyledMenu } from 'components/atoms';
import { userLogout } from 'actions/users';
import UserIcon from 'assets/images_svg/userlogo.svg';

const User = ({ cartModal, setCartModal, history }) => {
  const user = useSelector(getUserData);
  const dispatch = useDispatch();
  const error = useSelector(logoutError);

  useEffect(() => {
    if (error) {
      Notification.warning('error');
    }
  }, [error]);

  const logOut = () => {
    dispatch(userLogout.request());
  };

  return (
    <>
      <Dropdown
        overlay={() => (
          <StyledMenu width='200px' padding='15px' fz={18} fw={500} color='#16322F'>
            <StyledMenu.Item key='user-info'>
              {`${user.firstName} ${user.lastName}`}
            </StyledMenu.Item>
            <StyledMenu.Item onClick={logOut} key='sign-up'>
              Log out
            </StyledMenu.Item>
          </StyledMenu>
        )}
        placement='bottomRight'
        arrow
        trigger={['click']}
      >
        <img src={UserIcon} alt='userIcon' />
      </Dropdown>
    </>
  );
};

export default withRouter(User);
