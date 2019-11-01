import Axios from 'axios';
import { DRAGON_API } from '../config/constants';

const axios = Axios.create({ baseURL: DRAGON_API });

/**
 *
 * @param {Number} id
 */
export const getDragon = id => axios.get(`/dragon/${id}`);

/**
 *
 */
export const getDragonList = () => axios.get('/dragon');

/**
 *
 * @param {Object} data
 */
export const addDragon = data => axios.post('/dragon', data);
