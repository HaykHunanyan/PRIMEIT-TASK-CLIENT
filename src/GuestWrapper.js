import React from 'react';
import { withRouter } from 'react-router-dom';
import routes from './constants/routes';

const GuestWrapper = ({ children, location }) => {
  const pageTitle =
    Object.values(routes).find(el => el.pathname === location.pathname)?.pageTitle || 'Homepage';
  return (
    <>
      <div>
        <title>{pageTitle}</title>
      </div>
      {children}
    </>
  );
};

export default React.memo(withRouter(GuestWrapper));
