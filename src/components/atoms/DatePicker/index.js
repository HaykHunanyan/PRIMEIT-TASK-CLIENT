import styled, { css } from 'styled-components';
import { DatePicker as datepicker } from 'antd';

const DatePicker = styled(datepicker)`
  border: 1px solid #e8eef4;
  border-radius: 4px;
  height: 38px;
  width: 100%;
  padding: 15px;
  font-size: 14px;
  &[disabled] {
    background: #fff;
    color: rgba(0, 0, 0, 0.85);
    cursor: initial;
  }
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
`;
/** @component */
export default DatePicker;
