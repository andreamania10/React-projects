import axios from 'axios';
import { instance } from './api';

export const getInformation = (id) => instance.get(`/people/${id}`)

export const films = async (urls) => {
  const data = await Promise.all(urls.map(async (url) => {
    const r = await axios.get(url);
    return r.data;
  }))
  return data;
}

export const getPages = (id = 1) => instance.get(`/people/?page=${id}`)