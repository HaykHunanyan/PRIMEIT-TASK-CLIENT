import styled from 'styled-components';
import { PageHeader as pageheader } from 'antd';

const PageHeader = styled(pageheader)`
  padding: 15px 25px 15px 10px !important;
  border-bottom: 1px solid #e5e5e5;
  .ant-avatar {
    float: right;
  }
  .ant-page-header-heading-title {
    font-weight: normal !important;
  }
  .ant-typography {
    display: inline-block;
    padding: 7px;
    margin: 0;
  }
  .username {
    font-weight: bold;
    margin-left: 8px;
  }
`;

/** @component */
export default PageHeader;
