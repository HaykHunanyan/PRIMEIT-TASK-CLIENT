import React from 'react';
import { Row, Col, Typography } from 'antd';
import { DataSection } from 'components/atoms/Partials';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userIsAuth } from 'selectors/users';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const { Title } = Typography;
const NotFoundPage = () => {
  const isAuth = useSelector(userIsAuth);

  const { Paragraph } = Typography;
  return (
    <NotFoundWrapper>
      <Row>
        <Col>
          <DataSection>
            <Title level={1}>404</Title>
            <Paragraph>{''}</Paragraph>
            <Paragraph>Requested page not Found</Paragraph>
            {!isAuth && 'You May need to login to view this page'}
            <Paragraph>
              <Link to='/'>Go to main page</Link>
            </Paragraph>
          </DataSection>
        </Col>
      </Row>
    </NotFoundWrapper>
  );
};

export default React.memo(NotFoundPage);
