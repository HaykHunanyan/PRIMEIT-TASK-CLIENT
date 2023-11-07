import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userIsAuth } from 'selectors/users';
import { getAccessToken } from 'configs/localStorage';
import { userLogout } from 'actions/users';
import client from 'feathers';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const isAuth = useSelector(userIsAuth);
  const intervalRef = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      intervalRef.current = setInterval(() => {
        client.emit('create', 'check-authentication', { accessToken: getAccessToken() }, error => {
          if (error) {
            localStorage.clear();
            clearInterval(intervalRef.current);
            dispatch(userLogout.request());
            window.location.reload();
          }
        });
      }, 1000 * 15); // 15 seconds
    } else {
      clearInterval(intervalRef.current);
    }
  }, [dispatch, isAuth]);

  return props.children;
};
