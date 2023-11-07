import styled, { css } from 'styled-components';
import { Input } from 'antd';

const TextArea = styled(Input.TextArea)`
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px!important;
    `}
  ${props =>
    props.min_height &&
    css`
      min-height: ${props.min_height}!important;
    `}
    ${props =>
    props.height &&
    css`
      height: ${props.height}!important;
    `}
`;
/** @component */
export default TextArea;
