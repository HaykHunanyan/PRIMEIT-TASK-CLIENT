import styled, { css } from 'styled-components';
import { Checkbox as checkbox } from 'antd';

const Checkbox = styled(checkbox)`
  &:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #00dace;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #00dace;
    border-color: #00dace;
  }
  .ant-checkbox-checked::after {
    border: 1px solid #00dace;
  }

  ${props =>
    props.size &&
    css`
      input,
      .ant-checkbox-inner {
        width: ${props.size}px;
        height: ${props.size}px;
      }
    `}
`;
Checkbox.defaultProps = {};

/** @component */
export default Checkbox;
