import styled, { css } from 'styled-components';

import { Radio } from 'antd';

const RadioGroup = styled(Radio.Group)`
  margin-bottom: 20px;

  .ant-radio-checked .ant-radio-inner {
    border-color: #00dace;
    &:after {
      background-color: #00dace;
    }
  }
  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: #00dace;
  }
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      .ant-space-item {
        margin-bottom: ${props.mb}px !important;
      }
    `}
  ${props =>
    (props.mb_all || props.mb_all === 0) &&
    css`
      margin-bottom: ${props.mb_all}px !important;
    `}
    ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  @media screen and (max-width: 900px) {
    .ant-radio-button-wrapper {
      font-size: 14px;
      padding: 0 10px;
    }
  }
`;

RadioGroup.defaultProps = {};

/** @component */
export default RadioGroup;
