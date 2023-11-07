import styled, { css } from 'styled-components';
import { Typography } from 'antd';

const { Title: title } = Typography;
const Title = styled(title)`
  color: #101d5b !important;
  font-weight: 500 !important;
  font-family: Roboto !important;
  ${props =>
    props.level === 1 &&
    css`
      font-size: 36px !important;
      line-height: 40px !important;
    `}
  ${props =>
    props.level === 2 &&
    css`
      font-size: 24px;
      line-height: 28px;
    `}
  ${props =>
    props.level === 3 &&
    css`
      font-size: 18px;
      line-height: 16px;
    `}
  ${props =>
    props.level === 4 &&
    css`
      font-size: 16px;
      line-height: 24px;
    `}
  ${props =>
    props.level === 5 &&
    css`
      font-size: 14px;
      line-height: 24px;
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

/** @component */
export default Title;
