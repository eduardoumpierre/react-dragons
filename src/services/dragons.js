import Axios from 'axios';
import { DRAGON_API } from '../config/constants';

const http = Axios.create({
  baseURL: DRAGON_API,
});

export const getDragonList = () => http.get();
