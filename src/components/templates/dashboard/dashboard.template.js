import { useEffect } from 'react';
import { message } from 'antd';
import { Title, Spin } from 'components/atoms';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

message.config({
  duration: 1,
  maxCount: 1,
  rtl: true,
});

const TitleComp = styled.div`
  display: flex;
  justify-content: space-between;
  .ant-progress-inner {
    background-color: #7e8299;
  }
  @media screen and (max-width: 768px) {
    > div:nth-child(1) {
      display: none;
    }
  }
`;

const DashboardTemplate = ({ title, children, toolTipText, info }) => {
  const [loadingState] = useSelector(state => Object.values(state.loading).filter(i => i));

  const saveError = useSelector(state => state.error);

  const hasErrorNotification = item => {
    if (saveError[item]) message.error('Error saved');
    else message.success('Successfully saved');
  };

  useEffect(() => {
    if (saveError) {
      // eslint-disable-next-line array-callback-return
      Object.keys(saveError).filter(item => {
        const [, ADD_OR_UPDATE] = item.split('_');
        if (
          (ADD_OR_UPDATE === 'ADD' || ADD_OR_UPDATE === 'UPDATE') &&
          item !== 'LOAD_UPDATE_MESSAGE'
        )
          hasErrorNotification(item);
      });
    }
  }, [saveError]);

  return (
    <>
      <Spin spinning={!!loadingState}>
        <TitleComp>
          <div>
            <Title level={2}>{title}</Title>
          </div>
        </TitleComp>
        {children}
      </Spin>
    </>
  );
};

export default DashboardTemplate;
