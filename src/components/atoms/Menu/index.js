import styled, { css } from 'styled-components';
import { Menu as menu } from 'antd';
import propTypes from 'prop-types';

const Menu = styled(menu)`
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  .ant-dropdown-menu-item {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    .ant-dropdown-menu-title-content {
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  ${props =>
    props.min_height &&
    css`
      min-height: ${props.min_height};
    `}
  ${props =>
    props.width &&
    css`
      .ant-dropdown-menu-item {
        width: ${props.width};
      }
    `}
  ${props =>
    props.padding &&
    css`
      .ant-dropdown-menu-item {
        padding: ${props.padding};
      }
    `}
  ${props =>
    props.fz &&
    css`
      .ant-dropdown-menu-item {
        font-size: ${props.fz}px;
      }
    `}
    ${props =>
    props.color &&
    css`
      .ant-dropdown-menu-item {
        color: ${props.color};
      }
    `}
  ${props =>
    props.fw &&
    css`
      .ant-dropdown-menu-item {
        font-weight: ${props.fw};
      }
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
`;

Menu.propTypes = {
  type: propTypes.string,
};

Menu.defaultProps = {};

/** @component */
export default Menu;
