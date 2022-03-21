import axios from "axios";

const BASE__URL = "https://estella-app-api.herokuapp.com/api";
const PRODUCTS__URL = "products";
const PRODUCT__URL = "product";
const CATEGORY__URL = "categorys";
//https://estella-app-api.herokuapp.com/api/product?categoryId=61d0032a63fafc9d56531d4a&page=1&limit=3
const TEST__URL = "http://localhost:4000/api/product";

export const getListProducts = () => {
  return axios.get(`${BASE__URL}/${PRODUCTS__URL}`, {
    Accept: "application/json",
    "Content-Type": "application/json",
  });
};
export const getListCategory = () => {
  return axios.get(`${BASE__URL}/${CATEGORY__URL}`, {
    Accept: "application/json",
    "Content-Type": "application/json",
  });
};

export const getListProductByCategory = (slug, page, limit) => {
  return axios.get(`${BASE__URL}/${PRODUCT__URL}?slug=${slug}&page=${page}&limit=${limit}`, {
    Accept: "application/json",
    "Content-Type": "application/json",
  });
};

export const getProduct = (id) => {
  return axios.get(`${BASE__URL}/${PRODUCT__URL}/${id}`, {
    Accept: "application/json",
    "Content-Type": "application/json",
  });
};

export const addProduct = (data) => {
  return axios.post(`${TEST__URL}`, data, {
    Accept: "application/json",
    "Content-Type": "application/json",
  });
};
