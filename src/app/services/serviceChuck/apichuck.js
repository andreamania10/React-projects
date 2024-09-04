import axios from "axios";

export const getCategory = async () => {
  const res = await axios.get('https://api.chucknorris.io/jokes/categories');
  return res;
}

export const getJokeFromCategory = async () => {
  const web = await axios.get('https://api.chucknorris.io/jokes/random');
  return web;
}
