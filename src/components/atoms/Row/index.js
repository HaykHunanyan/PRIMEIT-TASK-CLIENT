import styled, { css } from 'styled-components';
import { Row as row } from 'antd';

const Row = styled(row)`
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px!important;
    `}
  ${props =>
    (props.mt || props.mb === 0) &&
    css`
      margin-top: ${props.mt}px!important;
    `}
    ${props =>
    props.content &&
    css`
      justify-content: ${props.content};
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding}!important;
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height}!important;
    `}

    ${props =>
    props.position &&
    css`
      position: ${props.position};
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width}!important;
    `}
`;

/** @component */
export default Row;
