import styled, { css } from 'styled-components';
import { Switch as toggle } from 'antd';

const Switch = styled(toggle)`
  width: 33px;
  height: 18px;
  &.ant-switch-checked {
    background-color: #00dace;

    .ant-switch-handle {
      left: calc(100% - 14px - 2px);
    }
  }
  .ant-switch-handle {
    top: 3px;
    left: 4px;
  }
  ${props =>
    props.type === 'secondary' &&
    css`
      color: #7e8299 !important;
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px !important;
    `}
`;

/** @component */
export default Switch;
