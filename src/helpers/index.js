import moment from 'moment';

export const generateRandom = () => Math.round(Math.random() * moment().valueOf());
