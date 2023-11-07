import styled, { css } from 'styled-components';
import { Layout } from 'antd';
import propTypes from 'prop-types';

const content = Layout.Content;
const Content = styled(content)`
  background: #fff !important;
  padding: 15px 25px !important;
  position: relative;
  ${props =>
    props.type === 'intakeQuestions' &&
    css`
      padding: 39px 149px 0px 150px !important;
      background-color: #ffffff !important;
      height: 100%;
    `}
  ${props =>
    props.type === 'large' &&
    css`
      padding: 30px !important;
      height: 100%;
    `}
    ${props =>
    props.padding &&
    css`
      padding: ${props.padding} !important;
      border: 1px solid #e8eef4;
      box-sizing: border-box;
      border-radius: 4px;
    `}
    ${props =>
    props.mobile_padding &&
    css`
      @media screen and (max-width: 992px) {
        padding: ${props.mobile_padding} !important;
      }
    `}
  ${props =>
    props.page_padding &&
    css`
      padding: ${props.page_padding} !important;
    `}
    ${props =>
    props.minheight &&
    css`
      min-height: ${props.minheight} !important;
    `}
    ${props =>
    props.mt &&
    css`
      margin-top: ${props.mt}px;
    `}
    ${props =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `}
    ${props =>
    props.border &&
    css`
      border: ${props.border};
    `}
    ${props =>
    props.type &&
    props.type === 'prof_photo' &&
    css`
      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}
  ${props =>
    props.collapsed &&
    props.collapsed === 'collapsed' &&
    css`
      @media screen and (max-width: 992px) {
        max-height: 100vh;
        overflow: hidden;
      }
    `}
`;
Content.propTypes = {
  type: propTypes.string,
};
Content.defaultProps = {};

/** @component */
export default Content;
