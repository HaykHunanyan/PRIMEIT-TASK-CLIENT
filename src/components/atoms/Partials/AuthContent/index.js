import styled from 'styled-components';

const AuthContent = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  background-color: #f6f9fc;
  padding-top: 30px;

  .ant-spin {
    margin: auto;
  }
`;

/** @component */
export default AuthContent;
