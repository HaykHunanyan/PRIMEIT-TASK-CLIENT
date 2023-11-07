import styled from 'styled-components';
import { Input } from 'antd';

const InputPassword = styled(Input.Password)`
  border: 1px solid #e8eef4;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  padding: 10px 15px;

  input {
    font-size: 14px;
  }
`;

/** @component */
export default InputPassword;
