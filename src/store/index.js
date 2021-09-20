import Vuex from "vuex";
import Vue from "vue";
import catInfo from "./modules/catInfo";
import hero from "./modules/hero";

// load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
  modules: {
    catInfo,
    hero,
  },
});
