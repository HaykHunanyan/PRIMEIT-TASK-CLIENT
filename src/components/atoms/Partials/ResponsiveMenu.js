import React, { Fragment, useState } from 'react';
import { Row, Col, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { Sidebar, MobileHeader, ResponsiveMenuWrapper } from '.';
import { getUserRole } from '../../../selectors/users';
import configureStore from '../../../configs/configureStore';

const ResponsiveMenu = ({
  history,
  location,
  pageData,
  isMobileCollapsed,
  setIsMobileCollapsed,
  checkBackArrow,
}) => {
  const [isIcon, setIsIcon] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const currentRole = getUserRole(configureStore.getState()) || '';

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    setIsIcon(!isIcon);
  };

  const changeRoute = item => {
    history.push({
      pathname: item.pathname,
      state: { name: item.pageTitle, data: null },
    });
  };

  const getKeys = () => {
    return [location.pathname];
  };
  const topMenu = (menuitem, secFunction = () => {}) => {
    const activeClass = menuitem.pathname === location.pathname ? 'active_tab' : '';
    return (
      <Fragment key={menuitem.key}>
        {!menuitem.hideInSideBar && (
          <Menu.Item
            key={menuitem.key}
            onClick={() => {
              secFunction();
              changeRoute(menuitem);
            }}
            className={activeClass}
          >
            <div className='menuItemsvg'>
              <img alt={menuitem.pageTitle} src={menuitem.icon} />
            </div>
            {collapsed ? '' : <span>{menuitem.pageTitle}</span>}
          </Menu.Item>
        )}
      </Fragment>
    );
  };
  const subMenu = (menuitem, secFunction = () => {}) => {
    return menuitem
      .filter(item => item.showInSideBar)
      .map(item => {
        const activeClass = item.pathname === location.pathname ? 'active_tab' : '';
        return (
          <Menu.Item
            key={item.key}
            onClick={() => {
              secFunction();
              changeRoute(item);
            }}
            className={activeClass}
          >
            <span>{item.pageTitle}</span>
          </Menu.Item>
        );
      });
  };

  return (
    <ResponsiveMenuWrapper>
      <Row>
        <Col className='sidebar-column' span={0} lg={24}>
          <Sidebar
            collapsed={collapsed}
            isIcon={isIcon}
            getKeys={getKeys}
            setOpenKeys={setOpenKeys}
            currentRole={currentRole}
            openKeys={openKeys}
            subMenu={subMenu}
            topMenu={topMenu}
            toggleCollapse={toggleCollapse}
          />
        </Col>
        <Col lg={0} span={24}>
          <MobileHeader
            collapsed={collapsed}
            isIcon={isIcon}
            getKeys={getKeys}
            setOpenKeys={setOpenKeys}
            currentRole={currentRole}
            openKeys={openKeys}
            subMenu={subMenu}
            topMenu={topMenu}
            pageData={pageData}
            isMobileCollapsed={isMobileCollapsed}
            setIsMobileCollapsed={setIsMobileCollapsed}
            checkBackArrow={checkBackArrow}
          />
        </Col>
      </Row>
    </ResponsiveMenuWrapper>
  );
};

export default withRouter(ResponsiveMenu);
