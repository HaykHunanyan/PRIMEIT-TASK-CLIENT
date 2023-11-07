import styled, { css } from 'styled-components';
import { InputNumber as input } from 'antd';
// import propTypes from 'prop-types';
// import { formatter, parser } from '../../../utils/numberInputFormatter';

const InputNumber = styled(input)`
  height: 40px;
  padding: 8px;
  display: flex;
  align-items: center;
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
    ${props =>
    props.fz &&
    css`
      font-size: ${props.fz}px;
    `}
    ${props =>
    props.hide === 'arrow' &&
    css`
      .ant-input-number-handler-wrap {
        display: none;
      }
    `};
  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}
`;

/** @component */

export default InputNumber;
