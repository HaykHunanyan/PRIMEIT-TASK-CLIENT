import styled from 'styled-components';
import propTypes from 'prop-types';

const SidePhoto = styled.div`
  background-image: url(${props => `${props.src}`});
  background-size: cover;
  height: 100vh;
`;

SidePhoto.propTypes = {
  top: propTypes.number,
  bottom: propTypes.number,
  left: propTypes.number,
  right: propTypes.number,
};

SidePhoto.defaultProps = {
  top: 25,
  bottom: 25,
  left: 0,
  right: 0,
};

/** @component */
export default SidePhoto;
