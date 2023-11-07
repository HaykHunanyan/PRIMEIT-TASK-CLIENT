import React from 'react';
// import { isRoutPermitted } from 'configs/isUserPermitted';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { protectedRouts } from 'constants/routes';
// import { Logo } from '.';
import styled, { css } from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import DashboardHeader from './DashboardHeader';
import { Paragraph } from '../index';
import { getUserRole } from '../../../selectors/users';

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 9px;
    filter: brightness(0) invert(1);
  }
`;
const MobileMenuWrapper = styled.div`
  overflow: hidden;
  background: rgba(16, 22, 51, 0.7);
  backdrop-filter: blur(10px);
  width: 100vw;
  right: 0;
  height: 100vh;
  position: absolute;
  z-index: 99;
  transition: all ease 0.3s;
  display: none;
  visibility: hidden;
  opacity: 0;
  ${props =>
    props.collapsed &&
    props.collapsed === 'collapsed' &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  @media only screen and (min-width: 768px) and (max-width: 992px) {
  display: block;
}
}
`;

const BackArrow = styled(ArrowLeftOutlined)`
  color: #fff;
  font-size: 18px;
  margin: 2px 15px 0 0;
`;

const { SubMenu } = Menu;

const MobileHeader = ({
  collapsed,
  isIcon,
  getKeys,
  setOpenKeys,
  currentRole,
  openKeys,
  subMenu,
  topMenu,
  pageData,
  isMobileCollapsed,
  setIsMobileCollapsed,
  checkBackArrow,
  history,
}) => {
  const role = useSelector(getUserRole);

  return (
    <>
      <DashboardHeader isMobile={true} checkBackArrow={checkBackArrow} />
      <div className='mobile-header'>
        <div className='logo-wrapper'>
          {/* <Logo isIcon={false} /> */}
          <PageTitleWrapper>
            {checkBackArrow(role) && <BackArrow onClick={() => history.goBack()} />}
            {pageData?.icon && <img alt={pageData?.pageTitle} src={pageData?.icon} />}
            <Paragraph mb={0} color='#fff' fz={18}>
              {pageData?.pageTitle || 'Dashboard'}
            </Paragraph>
          </PageTitleWrapper>
          <div
            className={`burger ${isMobileCollapsed && 'collapsed'}`}
            onClick={() => setIsMobileCollapsed(!isMobileCollapsed)}
          >
            <div className='burger-item' />
            <div className='burger-item' />
            <div className='burger-item' />
          </div>
        </div>
        <MobileMenuWrapper
          collapsed={isMobileCollapsed ? 'collapsed' : ''}
          onClick={() => setIsMobileCollapsed(false)}
        />
        <Menu
          theme='dark'
          // selectedKeys={getKeys()}
          // openKeys={openKeys}
          defaultOpenKeys={getKeys()}
          onOpenChange={props => setOpenKeys(props)}
          mode='inline'
          className={isMobileCollapsed ? '' : 'hide'}
        >
          {Object.values(protectedRouts[currentRole]).map(menuitem => {
            return menuitem.items &&
              Object.values(menuitem.items).some(item => item.showInSideBar) &&
              isIcon ? (
              <SubMenu
                className={openKeys.length ? '' : ' borderNone'}
                key={menuitem.pathname}
                title={
                  <div className='ant-menu-item'>
                    <div className='menuItemsvg paddingFix'>
                      <img alt={menuitem.pageTitle} src={menuitem.icon} />
                    </div>
                    {collapsed ? '' : <span>{menuitem.pageTitle}</span>}
                  </div>
                }
              >
                {menuitem.items &&
                  subMenu(Object.values(menuitem.items), () => setIsMobileCollapsed(false))}
              </SubMenu>
            ) : (
              topMenu(menuitem, () => setIsMobileCollapsed(false))
            );
          })}
        </Menu>
      </div>
    </>
  );
};

export default React.memo(withRouter(MobileHeader));
