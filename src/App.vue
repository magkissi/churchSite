<template>
  <div id="app">
    <div class="nav"><NavBar /></div>
    <router-view />

    <div><Footer /></div>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer.vue";
import NavBar from "./components/navbar/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
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
