import axios from 'axios';
import { baseUrl } from './Constants';

console.log('baseurl',baseUrl);

const instance = axios.create({
  baseURL: baseUrl
});

export default instance