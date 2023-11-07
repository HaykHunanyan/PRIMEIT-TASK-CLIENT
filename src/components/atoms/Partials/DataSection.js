import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const DataSection = styled.div`
  padding-top: ${props => `${props.top}px`};
  padding-bottom: ${props => `${props.bottom}px`};
  padding-right: ${props => `${props.left}px`};
  padding-left: ${props => `${props.right}px`};
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
    ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
    ${props =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
`;

DataSection.propTypes = {
  top: propTypes.number,
  bottom: propTypes.number,
  left: propTypes.number,
  right: propTypes.number,
};

DataSection.defaultProps = {
  top: 25,
  bottom: 25,
  left: 0,
  right: 0,
};

/** @component */
export default DataSection;
