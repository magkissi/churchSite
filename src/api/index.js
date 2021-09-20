import axios from "axios";

export const fetchCategories = async () => {
  const response = await axios.get("http://localhost:1337/categories");
  return response.data;
};

export const fetchHeroes = async () => {
  const response = await axios.get("http://localhost:1337/Heroes");
  return response.data;
};

export const fetchHomeSections = async () => {
  const response = await axios.get("http://localhost:1337/Sections");
  return response.data;
};
