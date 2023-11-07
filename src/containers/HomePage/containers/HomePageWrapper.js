import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './HomeHeader/Header';
import './index.scss';

const HomePageWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default withRouter(HomePageWrapper);
