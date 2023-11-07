import styled, { css } from 'styled-components';
import { Card as card } from 'antd';
import propTypes from 'prop-types';

const Card = styled(card)`
  margin-bottom: 30px;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 15%);
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px !important;
    `}

  .ant-card-head {
    color: #101d5b;
    font-size: 24px;
    padding: 0 30px;

    .ant-card-extra {
      svg {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .ant-card-body {
    padding: 30px;
  }
  ${props =>
    props.hpadding &&
    css`
      .ant-card-head {
        padding: ${props.hpadding};
      }
    `}
  ${props =>
    props.bpadding &&
    css`
      .ant-card-body {
        padding: ${props.bpadding};
      }
    `}
    ${props =>
    props.bheight &&
    css`
      .ant-card-body {
        height: ${props.bheight}px;
      }
    `}
    ${props =>
    props.bshadow &&
    css`
      .ant-card-body {
        box-shadow: ${props.bshadow};
      }
    `}
  ${props =>
    props.b_backcolor &&
    css`
      .ant-card-body {
        background-color: ${props.b_backcolor};
      }
    `}
  ${props =>
    props.extrasize &&
    css`
      .ant-card-head .ant-card-extra svg {
        font-size: ${props.extrasize};
      }
    `}
    ${props =>
    props.wrap &&
    css`
      .ant-card-body {
        flex-wrap: ${props.wrap};
      }
    `}
  ${props =>
    props.extracolor &&
    css`
      .ant-card-head .ant-card-extra svg {
        color: ${props.extracolor};
      }
    `}
  ${props =>
    props.hide === 'body' &&
    css`
      .ant-card-body {
        display: none;
      }
    `}
  ${props =>
    props.hide === 'header' &&
    css`
      .ant-card-head {
        display: none;
      }
    `}
  ${props =>
    props.titlesize &&
    css`
      .ant-card-head-title {
        font-size: ${props.titlesize};
      }
    `}
  ${props =>
    props.titlecolor &&
    css`
      .ant-card-head-title {
        color: ${props.titlecolor};
      }
    `}
  ${props =>
    props.b_align &&
    css`
      .ant-card-body {
        text-align: ${props.b_align};
      }
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.hwhite_space &&
    css`
      .ant-card-head-title {
        white-space: ${props.hwhite_space};
      }
    `}
  @media screen and (max-width: 768px) {
    .ant-card-body {
      padding: 15px;
    }

    .ant-card-head {
      padding: 0 15px;
    }

    ${props =>
      props.bpadding &&
      css`
        .ant-card-body {
          padding: ${props.bpadding};
        }
      `}
  }
`;

Card.propTypes = {
  type: propTypes.string,
};

Card.defaultProps = {};

/** @component */
export default Card;
