import styled, { css } from 'styled-components';
import { Col as col } from 'antd';

const Col = styled(col)`
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

/** @component */
export default Col;
