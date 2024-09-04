import axios from "axios";
import { instance } from "./api";

export const getInformation = (id) => instance.get(`/character/${id}`)

export const getPages = (id = 1) => instance.get(`/character?page=${id}`)

export const getEpisodesFromUrl = async (urls) => {
  const data = await Promise.all(urls.map(async (url) => {
    const r = await axios.get(url);
    return r.data
  }))
  return data;
}