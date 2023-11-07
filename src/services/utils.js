import client from './main-client';

export const getOTPApi = data => client().post('/utils', data);
export const getUtilsApi = params => client().get('/utils', { params });
