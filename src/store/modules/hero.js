import { fetchHeroes, fetchHomeSections } from "../../api";

const state = {
  heroes: [],
  homeSections: [],
};

const getters = {};

const actions = {
  async getHeroes({ commit }) {
    const response = await fetchHeroes();

    commit("setHeroes", response);
  },

  async getHomeSections({ commit }) {
    const response = await fetchHomeSections();

    commit("setHomeSections", response);
  },
};

const mutations = {
  setHeroes(state, heroes) {
    state.heroes = heroes;
  },

  setHomeSections(state, homeSections) {
    state.homeSections = homeSections;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
