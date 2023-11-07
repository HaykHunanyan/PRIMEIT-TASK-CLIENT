import styled, { css } from 'styled-components';
import { Modal as modal } from 'antd';
import propTypes from 'prop-types';

const Modal = styled(modal)`
  cursor: pointer;
  .ant-modal-footer {
    > button {
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
      &:nth-child(1) {
        color: #4ba369;
        &:hover {
          color: #36784d;
          border-color: #36784d;
        }
        &:active {
          color: #36784d;
          border-color: #36784d;
        }
        &:focus {
          color: #36784d;
          border-color: #36784d;
        }
      }
      &:nth-child(2) {
        background: #00dace;
        border-color: #00dace;
        color: #fff;
        &:hover {
          background: #09a79e;
          color: #fff;
        }
        &:active {
          background: #09a79e;
          color: #fff;
        }
        &:focus {
          background: #09a79e;
          color: #fff;
        }
      }
    }
  }
  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
`;

Modal.propTypes = {
  type: propTypes.string,
};

Modal.defaultProps = {};

/** @component */
export default Modal;
