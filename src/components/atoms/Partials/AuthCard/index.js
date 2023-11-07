import styled, { css } from 'styled-components';

const AuthCard = styled.div`
  width: 35vw;
  background-color: #fff;
  padding: 30px;
  border: 1px solid #e8eef4;
  border-radius: 4px;
  height: fit-content;

  .auth_content_card_header {
    text-align: center;

    * {
      color: #101d5b;
      font-weight: 500;
    }

    .ant-radio-group {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 30px;
    }

    .auth_content_reset_error {
      color: #ff4d4f;
      font-weight: 500;
      margin-bottom: 30px;

      a {
        color: #00dace;
      }
    }
  }

  .auth_content_card_rem_forgot {
    display: flex;
    justify-content: space-between;
    font-weight: 500;

    span {
      color: #c8cbd8;
    }
  }

  .auth_submit_button_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .auth_content_card_footer {
    text-align: center;
    color: #c8cbd8;

    .ant-divider-horizontal {
      margin: 20px 0;
    }
    .is_reset_footer {
      font-size: 14px;
    }
  }

  ${props =>
    props.type === 'shadowed' &&
    css`
      box-shadow: 5px 5px 20px #cf77f3, 0px 0px 20px #00dace;
      padding: 60px 30px;

      img {
        display: block;
        margin: 20px auto 40px auto;
      }

      h5 {
        text-align: center;
      }
    `}
  @media screen and (max-width: 1300px) {
    width: 50vw;
  }
  @media screen and (max-width: 900px) {
    width: 80vw;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100%;

    .auth_content_card_header .ant-radio-group {
      flex-direction: column;
      padding: 0;

      label {
        margin: 5px 0;
      }
    }

    .auth_content_card_footer .ant-divider {
      margin: 10px 0;
    }
  }
}
`;

/** @component */
export default AuthCard;
