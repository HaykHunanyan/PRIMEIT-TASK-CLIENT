import React from 'react';
import { DashboardPrimary } from 'components/templates/dashboard/dashboard.template.stories';
import Questions from 'components/organisms/admin/questions';

const ProductsPage = () => {
  return (
    <DashboardPrimary title='Questions'>
      <Questions />
    </DashboardPrimary>
  );
};

export default ProductsPage;
