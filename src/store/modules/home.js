import {
  fetchHeroes,
  fetchHomeLeaders,
  fetchHomeSections,
  fetchSermons,
} from "../../api";

const state = {
  heroes: [],
  homeSections: [],
  sermons: [],
  leaders: [],
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

  async getLeaders({ commit }) {
    const response = await fetchHomeLeaders();

    commit("setLeaders", response);
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

  setLeaders(state, leaders) {
    state.leaders = leaders;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
