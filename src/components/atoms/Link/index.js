import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import { Link as link } from 'react-router-dom';

const Link = styled(link)`
  font-weight: 500;
  color: #00dace !important;
  &:hover {
    color: #00dace !important;
  }
  &:active {
    color: #00dace !important;
  }
  &:focus {
    color: #00dace !important;
  }
  ${props =>
    props.type === 'primary' &&
    css`
      color: #4ba369 !important;
      &:hover {
        color: #36784d !important;
      }
      &:active {
        color: #36784d !important;
      }
      &:focus {
        color: #36784d !important;
      }
    `}
  ${props =>
    props.type === 'lightBlue' &&
    css`
      color: #7e8299 !important;
      &:hover {
        color: #35a5e4 !important;
      }
      &:active {
        color: #35a5e4 !important;
      }
      &:focus {
        color: #35a5e4 !important;
      }
    `}
  ${props =>
    props.type === 'dark' &&
    css`
      color: #101d5b !important;
      &:hover {
        color: #101d5b !important;
      }
      &:active {
        color: #101d5b !important;
      }
      &:focus {
        color: #101d5b !important;
      }
    `}
  ${props =>
    props.t_decor &&
    css`
      text-decoration: ${props.t_decor}!important;
    `}
  ${props =>
    props.fw &&
    css`
      font-weight: ${props.fw}!important;
    `}
  ${props =>
    props.fz &&
    css`
      font-size: ${props.fz}px!important;
    `}
    ${props =>
    props.color &&
    css`
      color: ${props.color}!important;
    `}
`;

Link.propTypes = {
  type: propTypes.string,
};

Link.defaultProps = {};

/** @component */
export default Link;
