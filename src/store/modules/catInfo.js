import { fetchCategories } from "../../api";

const state = {
  categories: [],
};

const getters = {};

const actions = {
  async getCategories({ commit }) {
    const response = await fetchCategories();

    commit("setCategories", response);
  },
};

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
