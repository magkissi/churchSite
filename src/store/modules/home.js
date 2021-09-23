import { fetchHeroes, fetchHomeSections, fetchSermons } from "../../api";

const state = {
  heroes: [],
  homeSections: [],
  sermons: [],
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

  async getSermons({ commit }) {
    const response = await fetchSermons();

    commit("setSermons", response);
  },
};

const mutations = {
  setHeroes(state, heroes) {
    state.heroes = heroes;
  },

  setHomeSections(state, homeSections) {
    state.homeSections = homeSections;
  },

  setSermons(state, sermons) {
    state.sermons = sermons;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
