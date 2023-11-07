import client from './main-client';

export const fetchAllServiceApi = params => client().get('/services', { params });
export const fetchOneServiceApi = ({ id, ...params }) =>
  client().get(`/services/${id}`, { params });
export const updateServiceApi = params => client().patch(`/services/${params.id}`, params.values);
export const addServiceApi = data => client().post('/services', data);
