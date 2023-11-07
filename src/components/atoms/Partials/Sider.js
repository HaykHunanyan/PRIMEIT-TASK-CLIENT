import styled from 'styled-components';
import { Layout } from 'antd';

const sider = Layout.Sider;

const Sider = styled(sider)`
  background: #101633 !important;
  min-height: 100vh !important;
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border: 0;
    background-color: #101633 !important;
  }
  .ant-menu-item-selected {
    font-weight: 500;
  }
`;

/** @component */
export default Sider;
