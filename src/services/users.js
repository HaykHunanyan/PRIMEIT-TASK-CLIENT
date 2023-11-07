import client from './main-client';

export const userLoginApi = credentials => client().post('/authentication', credentials);
export const userLogoutApi = () => client().delete('/authentication');
export const userRegisterApi = data => client().post('/users', data);
export const userAuthmanagementApi = credentials => client().post('/authmanagement', credentials);

export const getUsersApi = params => client().get('/users', { params });
export const getUserApi = params => client().get(`/users/${params.id}`, { params });
export const addNewUserApi = data => client().post('/users', data);
export const deleteUsersApi = params => client().delete(`/users/${params.id}`);
export const updateUsersApi = params => client().patch(`/users/${params.id}`, params.values);
