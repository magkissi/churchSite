import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  created() {
    AOS.init();
  },

  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
