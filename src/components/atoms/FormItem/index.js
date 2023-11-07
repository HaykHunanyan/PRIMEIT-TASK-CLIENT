import styled, { css } from 'styled-components';
import { Form } from 'antd';

const FormItem = styled(Form.Item)`
  margin-bottom: 0px;
  .ant-form-item-label {
    padding: 0px;
  }
  ${props =>
    props.margin &&
    css`
      .ant-form-item-label > label {
        margin: ${props.margin};
      }
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
`;

FormItem.defaultProps = {};

/** @component */
export default FormItem;
