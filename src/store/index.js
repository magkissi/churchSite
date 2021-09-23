import Vuex from "vuex";
import Vue from "vue";
import catInfo from "./modules/catInfo";
import home from "./modules/home";

// load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
  modules: {
    catInfo,
    home,
  },
});
