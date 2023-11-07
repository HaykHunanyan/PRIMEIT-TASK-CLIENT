import { useState } from 'react';
import { Spin } from 'antd';

const useApiCall = callFunc => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const handleApiCall = (params, callback = () => {}) => {
    setLoading(true);
    callFunc(params)
      .then(res => {
        setLoading(false);
        setData(res?.data || null);
        callback();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const setDefaultValues = () => setData(null);

  const spin = attr => (
    <>
      {loading && (
        <Spin
          size='large'
          style={{
            position: 'absolute',
            top: attr?.top || '0%',
            left: attr?.left || '0%',
            zIndex: '100',
          }}
        />
      )}
    </>
  );

  return [handleApiCall, val => spin(val), data, setDefaultValues];
};

export default useApiCall;
