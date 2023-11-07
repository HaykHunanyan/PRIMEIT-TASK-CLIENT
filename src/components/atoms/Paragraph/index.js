import styled, { css } from 'styled-components';
import { Typography } from 'antd';

const { Paragraph: paragraph } = Typography;
const Paragraph = styled(paragraph)`
  color: #101d5b;
  font-weight: 500;
  font-family: Open Sans;
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.fm &&
    css`
      font-family: ${props.fm};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin}!important;
    `}
    ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ${props =>
    (props.lh || props.lh === 0) &&
    css`
      line-height: ${props.lh}px!important;
    `}
    ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px!important;
    `}
  ${props =>
    props.fz &&
    css`
      font-size: ${props.fz}px;
    `}
    ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.fw &&
    css`
      font-weight: ${props.fw};
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
    ${props =>
    props.size_type &&
    props.size_type === 'responsive' &&
    css`
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
      @media screen and (max-width: 480px) {
        font-size: 14px;
      }
    `}
`;

/** @component */
export default Paragraph;
