import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { RightOutlined } from '@ant-design/icons';

const Togle = styled(RightOutlined)`
  font-size: 14px;
  color: #39485c;
  transform: ${props => `${props.rotate}!important`};
`;

Togle.propTypes = {
  transform: propTypes.string,
};

Togle.defaultProps = {
  transform: '0 0 0 0',
};

const Toggle = ({ isIcon }) => (
  <Togle rotate={isIcon === false ? 'rotate(0deg)' : 'rotate(180deg)'} />
);

export default Toggle;
