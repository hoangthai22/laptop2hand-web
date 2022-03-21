import axios from "axios";

const BASE__URL = "http://localhost:4000/api/upload";


export const uploadImg = (files) => {
  return axios.get(`${BASE__URL}`);
};
