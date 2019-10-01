import Axios from 'axios';
import { DRAGON_API } from '../config/constants';

const axios = Axios.create({ baseURL: DRAGON_API });

export const getDragon = id => axios.get(`/${id}`);
export const getDragonList = () => axios.get();
