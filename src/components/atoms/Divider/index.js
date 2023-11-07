import styled, { css } from 'styled-components';
import { Divider as divider } from 'antd';

const Divider = styled(divider)`
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
`;

/** @component */
export default Divider;
