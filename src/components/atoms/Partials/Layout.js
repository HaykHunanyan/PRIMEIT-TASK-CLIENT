import styled, { css } from 'styled-components';
import { Layout as layout } from 'antd';

const Layout = styled(layout)`
  background: #fff !important;
  overflow: visible !important;
  ${props =>
    props.dashboardlayout &&
    css`
      min-height: 100vh;
      @media (max-width: 992px) {
        flex-direction: column !important;
        width: 100% !important;
      }
    `}
  @media (max-width: 992px) {
  width: 100% !important;
}}
`;

/** @component */
export default Layout;
