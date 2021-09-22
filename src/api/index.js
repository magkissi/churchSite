import axios from "axios";

export const fetchCategories = async () => {
  const response = await axios.get.env(
    `${process.env.VUE_APP_API_URL}/categories`
  );
  return response.data;
};

export const fetchHeroes = async () => {
  const response = await axios.get(`${process.env.VUE_APP_API_URL}/Heroes`);
  return response.data;
};

export const fetchHomeSections = async () => {
  const response = await axios.get(`${process.env.VUE_APP_API_URL}/Sections`);
  return response.data;
};
