import styled, { css } from 'styled-components';
import { Input as input } from 'antd';

const Input = styled(input)`
  height: 40px;
  width: 100%;
  padding: 15px;
  font-weight: 500;
  &[disabled] {
    background: #fff;
    color: rgba(0, 0, 0, 0.85);
    cursor: initial;
  }
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;
/** @component */
export default Input;
