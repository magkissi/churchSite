<template>
  <div id="app">
    <div class="nav">
      <div v-if="smallScreen"><SmallScreenNav /></div>

      <div v-if="bigScreen"><NavBar /></div>
    </div>

    <router-view />

    <div><Footer /></div>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer.vue";
import SmallScreenNav from "./components/navbar/SmallScreenNav.vue";
import NavBar from "./components/navbar/NavBar.vue";

export default {
  name: "App",
  components: {
    SmallScreenNav,
    Footer,
    NavBar,
  },
  data() {
    return {
      bigScreen: true,
      smallScreen: false,
    };
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  methods: {
    handleView() {
      const screenSize = window.innerWidth <= 990;
      if (screenSize) {
        this.bigScreen = false;
        this.smallScreen = true;
      } else {
        this.bigScreen = true;
        this.smallScreen = false;
      }
    },
  },
};
</script>

<style>
@media screen and (max-width: 731px) {
  #app {
    width: 100%;
  }
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
.nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 6;
  height: 96px;
}
</style>
