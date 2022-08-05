import { BASE_URL } from "../constants.js";

export const Api = axios.create({
  baseURL: BASE_URL,
});
