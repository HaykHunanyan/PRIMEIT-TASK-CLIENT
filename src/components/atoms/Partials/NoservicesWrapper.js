import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../index';

const NoServicesWrapper = ({ text }) => {
  const NoDataWrapper = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  `;
  return (
    <NoDataWrapper>
      <Paragraph fz={20}>{text}</Paragraph>
    </NoDataWrapper>
  );
};

export default NoServicesWrapper;
