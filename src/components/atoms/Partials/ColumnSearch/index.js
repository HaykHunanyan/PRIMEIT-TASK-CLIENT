import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Button } from 'components/atoms';
import './columnSearchWrapper.scss';

const ColumnSearch = ({ dataIndex, search }) => {
  const [inpValue, setInpValue] = useState('');
  return (
    <div className='column_search_button'>
      <Input
        height='30px'
        placeholder={`Search ${dataIndex}`}
        value={inpValue}
        onChange={e => setInpValue(e.target.value)}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Button
        type='primary'
        onClick={() => search(inpValue)}
        icon={<SearchOutlined />}
        width='100%'
        height='33px'
        fontSize='13px'
      >
        Search
      </Button>
    </div>
  );
};

export default ColumnSearch;
