import styled, { css } from 'styled-components';
import { Select as select } from 'antd';

const Select = styled(select)`
  width: 100%;
  .ant-select-selector {
    border: 1px solid #e8eef4 !important;
    border-radius: 4px !important;
    width: 100% !important;
    background: #fff !important;
    height: 40px !important;
    padding: 12px 15px !important;
    display: flex;
    align-items: center;

    input {
      font-size: 14px;
    }
  }
  ${props =>
    props.type === 'search' &&
    css`
      .ant-select-selector {
        height: 60px !important;
        font-weight: 500;
        color: #101d5b;
        border-radius: 0 !important;
        border: none !important;
      }
      .ant-select-arrow {
        left: 20px;
        color: #00dace;
        top: 52%;
      }
      .ant-select-selection-item {
        padding-left: 30px !important;
        padding-right: 0 !important;
      }
      .ant-select-selection-placeholder {
        padding-left: 30px !important;
        padding-right: 0 !important;
      }
      .ant-select-selection-search {
        left: 40px !important;
        right: 10px !important;

        input {
          height: 100% !important;
        }
      }
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width} !important;
      .ant-select-selector {
        width: ${props.width} !important;
      }
    `}
    ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius} !important;
      .ant-select-selector {
        border-radius: ${props.radius} !important;
      }
    `}

    ${props =>
    props.font_weight &&
    css`
      font-weight: ${props.font_weight} !important;
      .ant-select-selection-item {
        font-weight: ${props.font_weight} !important;
      }
    `}
    ${props =>
    props.arrow_color &&
    css`
      color: ${props.arrow_color} !important;
      .ant-select-arrow {
        color: ${props.arrow_color} !important;
      }
    `}
${props =>
    props.height &&
    css`
      height: ${props.height} !important;
      .ant-select-selector {
        height: ${props.height} !important;
      }
    `}
    ${props =>
    props.border &&
    css`
      .ant-select-selector {
        border: ${props.border} !important;
      }
    `}
${props =>
    props.fz &&
    css`
      font-size: ${props.fz} !important;
      .ant-select-selector {
        font-size: ${props.fz} !important;
      }
      .ant-select-selection-placeholder {
        font-size: ${props.fz};
      }
    `}
${props =>
    props.fw &&
    css`
      font-weight: ${props.fw} !important;
      .ant-select-selector {
        font-weight: ${props.fw} !important;
      }
      .ant-select-selection-placeholder {
        font-weight: ${props.fw};
      }
    `}
    ${props =>
    props.color &&
    css`
      .ant-select-selection-placeholder {
        color: ${props.color};
      }
    `}
${props =>
    props.disabled &&
    css`
      .ant-select-selector {
        background: #f5f5f5 !important;
      }
    `}
${props =>
    props.padding &&
    css`
      .ant-select-selector {
        padding: ${props.padding} !important;
      }
    `}
${props =>
    props.input_height &&
    css`
      .ant-select-selection-search-input {
        height: ${props.input_height} !important;
      }
    `}
${props =>
    props.type === 'intake' &&
    css`
      @media screen and (max-width: 768px) {
        .ant-select-selection-item {
          font-size: 16px;
        }
      }
      @media screen and (max-width: 480px) {
        &,
        .ant-select-selector {
          width: unset !important;
        }
        .ant-select-selection-item {
          font-size: 14px;
        }
      }
    `}
${props =>
    props.type === 'responsive' &&
    css`
      @media screen and (max-width: 768px) {
        .ant-select-selection-item {
          font-size: 16px;
        }
      }
      @media screen and (max-width: 480px) {
        &,
        .ant-select-selector {
          width: 100% !important;
        }
        .ant-select-selection-item {
          font-size: 14px;
        }
      }
    `}
`;
export default Select;
