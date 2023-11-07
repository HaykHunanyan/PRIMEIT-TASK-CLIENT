import styled from 'styled-components';
import propTypes from 'prop-types';

const PreviewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  overflow-y: auto;
  .profile_content_wrapper {
    width: 100%;
    padding: 60px 150px;
    .profile_content {
      display: flex;
      justify-content: center;
      .ant-card {
        width: 700px;
      }
      .ant-card-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        > p {
          margin-bottom: 0px;
          font-size: 18px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          &:nth-child(even) {
            text-align: right;
            color: #7e8299;
          }
          &:nth-child(odd) {
            color: #101d5b;
            margin-left: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;

PreviewWrapper.propTypes = {
  top: propTypes.number,
  bottom: propTypes.number,
  left: propTypes.number,
  right: propTypes.number,
};

PreviewWrapper.defaultProps = {
  top: 25,
  bottom: 25,
  left: 0,
  right: 0,
};

/** @component */
export default PreviewWrapper;
