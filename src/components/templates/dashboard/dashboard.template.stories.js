import React from 'react';
import DashboardTemplate from './dashboard.template';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Templates/CustomerDashboard',
  component: DashboardTemplate,
};

const Template = args => <DashboardTemplate {...args} />;
export const DashboardPrimary = Template.bind({});
DashboardPrimary.defaultProps = {
  title: 'Page name',
  children: 'content',
  size: 2,
  titleMarginBottom: 30,
};
DashboardPrimary.args = { ...DashboardPrimary.defaultProps };
