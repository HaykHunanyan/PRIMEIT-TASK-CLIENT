import styled, { css } from 'styled-components';
import { Dropdown as dropdown } from 'antd';
import propTypes from 'prop-types';

const Dropdown = styled(dropdown)`
  cursor: pointer;
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
`;

Dropdown.propTypes = {
  type: propTypes.string,
};

Dropdown.defaultProps = {};

/** @component */
export default Dropdown;
