import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { protectedRouts } from 'constants/routes';
import { Sider, Logo, Toggle } from '.';

const Sidebar = ({
  collapsed,
  isIcon,
  getKeys,
  setOpenKeys,
  currentRole,
  openKeys,
  subMenu,
  topMenu,
  toggleCollapse,
}) => {
  const { SubMenu } = Menu;

  return (
    <Sider width={!collapsed ? 300 : 70} collapsible trigger={null}>
      <Logo currentRole={currentRole} />
      <Menu
        theme='dark'
        defaultOpenKeys={getKeys()}
        onOpenChange={props => setOpenKeys(props)}
        mode='inline'
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
              {menuitem.items && subMenu(Object.values(menuitem.items))}
            </SubMenu>
          ) : (
            topMenu(menuitem)
          );
        })}
        <div
          key='closemenu'
          className={`slide_bar_toggle ${collapsed ? 'positLeft35' : 'positLeft305'}`}
          onClick={toggleCollapse}
        >
          <div>
            <Toggle isIcon={isIcon} transformRotate='90deg' />
          </div>
        </div>
      </Menu>
    </Sider>
  );
};

export default React.memo(withRouter(Sidebar));
