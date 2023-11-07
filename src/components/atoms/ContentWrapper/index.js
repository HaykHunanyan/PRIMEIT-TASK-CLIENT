import styled, { css } from 'styled-components';

const ContentWrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;

  ${props =>
    props.position &&
    css`
      position: ${props.position};
    `}
`;

export default ContentWrapper;
