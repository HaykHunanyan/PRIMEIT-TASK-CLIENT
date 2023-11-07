import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Layout, DashboardHeader, ResponsiveMenu, Content } from 'components/atoms/Partials';
import { protectedRouts } from './constants/routes';
import { getUserData } from './selectors/users';

const convertRoutes = routes => {
  let pushData = [...Object.values(routes)];
  for (const key in routes) {
    if (routes[key].items) {
      pushData = [...pushData, ...Object.values(routes[key].items)];
    }
  }
  return pushData;
};

const routesWithBackArrow = {
  admin: ['/dashboard'],
};

const DashboardWrapper = ({ location, children }) => {
  const [isMobileCollapsed, setIsMobileCollapsed] = useState(false);
  const user = useSelector(getUserData);
  const convertedRoutes = convertRoutes(protectedRouts[user?.role]);
  const pageData = Object.values(convertedRoutes).find(el =>
    location.pathname.includes(el.pathname)
  );

  const checkBackArrow = role =>
    routesWithBackArrow[role]
      ? !!routesWithBackArrow[role].filter(el => location.pathname.includes(el)).length
      : false;

  const defContent = (
    <>
      <ResponsiveMenu
        pageData={pageData}
        isMobileCollapsed={isMobileCollapsed}
        setIsMobileCollapsed={setIsMobileCollapsed}
        checkBackArrow={checkBackArrow}
      />
      <Layout>
        <Row>
          <Col xs={0} lg={24}>
            <DashboardHeader checkBackArrow={checkBackArrow} />
          </Col>
        </Row>
        <Content type='large' collapsed={isMobileCollapsed ? 'collapsed' : ''}>
          {children}
        </Content>
      </Layout>
    </>
  );
  const fullScreenContent = (
    <Layout>
      <Content type='large' page_padding='0'>
        {children}
      </Content>
    </Layout>
  );

  return (
    <Layout dashboardlayout='dashboardLayout'>
      <div>
        <title>{pageData?.pageTitle || 'Home'}</title>
      </div>
      {pageData?.isFullscreen ? fullScreenContent : defContent}
    </Layout>
  );
};
export default React.memo(withRouter(DashboardWrapper));
