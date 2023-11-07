import styled from 'styled-components';

const MobileHeaderWrapper = styled.div`
  background-color: #101633 !important;
  .menuItemsvg {
    padding: 0 8px 0 9px !important;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    > img {
      width: 24px;
      height: 24px;
    }
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      margin-left: 5px;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #ff4d4f;
    }
  }
  .ant-menu-item {
    display: flex;
    flex-direction: row;
    height: 44px;
    color: #ffffff !important;
    padding: 0 15px !important;
    margin: 0 !important;
    border-bottom: 1px solid #171d38;
    &:first-child {
      border-top: 1px solid #171d38;
    }
    &:nth-last-child(2) {
      .menuItemsvg {
        padding-top: 3px !important;
      }
      .paddingFix {
        border-bottom: none !important;
        padding-top: 4px !important;
      }
    }

    > span {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 21px;
      font-weight: 400;
    }
    &:hover {
      .menuItemsvg {
        border: none;
      }
      background-color: rgba(203, 203, 203, 0.07);
      > span {
        color: #00dace;
      }
      + li {
        .menuItemsvg {
          border-top: none;
        }
      }
    }

    &.active_tab,
    &.ant-menu-item-selected {
      background-color: rgba(203, 203, 203, 0.07) !important;
      > span {
        color: #00dace;
      }
      &:before {
        content: '';
        width: 3px;
        height: 100%;
        background: #00dace;
        position: absolute;
        left: 0;
      }
    }
  }
  .slide_bar_toggle {
    position: absolute;
    top: 48%;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    transition: all ease 0.2s;
    z-index: 10;
    > div {
      position: relative;
      left: 16px;
      width: 32px !important;
      height: 32px;
      border-radius: 25px;
      background: #ffffff;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .positLeft305 {
    left: 270px;
  }
  .positLeft35 {
    left: 40px;
  }

  .ant-menu-submenu {
    width: 100%;
    .ant-menu-submenu-title {
      margin: 0 !important;
      padding: 0 8px 0 9px !important;
      min-height: 44px;
    }
    .ant-menu {
      > li {
        border: none !important;
        padding-left: 59px !important;
        height: 44px;
      }
    }
    .ant-menu-submenu-title {
      padding: 0 !important;
    }
  }
  .ant-menu-sub {
    background-color: #0c1128 !important;
    li {
      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
      }
      &.active_tab {
        background-color: rgba(203, 203, 203, 0.07);
        > span {
          color: #00dace;
        }
        &:before {
          width: 0;
        }
      }
    }
  }
  .borderNone {
    &:hover {
      + li {
        .menuItemsvg {
          border-top: none !important;
        }
      }
    }
  }

  .mobile-header {
    position: relative;
    .logo-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;

      .burger {
        width: 24px;
        cursor: pointer;
        position: relative;
        z-index: 99;

        .burger-item {
          width: 24px;
          height: 4px;
          margin-bottom: 4px;
          background: #e8eef4;
          border-radius: 4px;
          transition: all ease 0.3s;
        }

        &.collapsed .burger-item {
          transform: rotate(45deg) translate(-6px, -5px);

          &:nth-last-child(3) {
            transition: none;
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
          }

          &:nth-last-child(2) {
            transform: rotate(-45deg) translate(-1px, -1px);
          }
        }
      }
    }
    .ant-menu-root {
      position: absolute;
      overflow: hidden;
      z-index: 100;
      right: 0;
      min-height: 100vh;
      background-color: #101633;
      width: 100%;
      &.hide {
        width: 0;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .mobile-header {
      .ant-menu-root {
        width: 70%;
      }
    }
  }
`;

/** @component */
export default MobileHeaderWrapper;
