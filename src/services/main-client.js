import axios from 'axios';
import Promise from 'bluebird';
import routes from 'constants/routes';
import { getAccessToken, emptyState } from '../configs/localStorage';
import { API_ROOT } from '../configs/env-vars';

Promise.config({
  cancellation: true,
});

// overwrite native Promise implementation with Bluebird's
window.Promise = Promise;

export const authorizationHeader = () => ({
  Authorization: getAccessToken(),
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (headers = {}) => {
  const service = axios.create({
    baseURL: API_ROOT, // url of the api
    headers: {
      Authorization: getAccessToken(),
      ...headers,
    },
  });
  service.interceptors.response.use(
    response => response,
    async error => {
      const errorResponse = error.response;
      if (process?.env.NODE_ENV === 'production') {
        switch (errorResponse.status) {
          case 404:
            window.location.pathname = routes.notFound.pathname;
            break;
          case 403:
            window.location.pathname = '/not-permitted';
            break;
          default:
            break;
        }
      }
      if (errorResponse.status === 401) {
        localStorage.clear();
        if (
          !window.location.pathname.includes('sign-in') &&
          !window.location.pathname.includes('log-in-out')
        ) {
          await emptyState();
          // window.location.pathname = '/sign-in';
          setTimeout(() => {
            window.location.pathname = '/';
          }, 1000);
        }
      }
      throw error;
    }
  );
  return service;
};
