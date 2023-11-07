import React from 'react';
import { Table } from 'components/atoms';

const PagesTable = ({
  data,
  columns,
  loading,
  hideFilters,
  totalData,
  setSearchValue,
  searchValue,
  filtersData,
  title,
  xScroll,
}) => {
  const handleTableChange = ({ pagination, filter }) => {
    if (filtersData) filtersData({ skip: pagination.current, filter });
    else setSearchValue({ ...searchValue, page: pagination.current });
  };
  return (
    <>
      <Table
        dataSource={data || []}
        columns={columns}
        loading={loading || false}
        extra='pagination'
        pagination={
          !hideFilters && {
            position: ['topRight'],
            size: 'small',
            showSizeChanger: false,
            total: totalData || 0,
            showTotal: (total, current) => `Showing ${current[0]}-${current[1]} of ${total || 0}`,
          }
        }
        bodycolor='#101D5B'
        rowKey='id'
        title={title && title}
        scroll={{ x: xScroll || 1500 }}
        onChange={(pagination, filter, sort) => handleTableChange({ pagination, filter, sort })}
      />
    </>
  );
};

export default PagesTable;
