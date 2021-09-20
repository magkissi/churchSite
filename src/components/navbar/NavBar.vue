<template>
  <div
    :class="[
      { change_color: scrollPosition > 50 },
      'md h-24 flex align-center text-white pt-10',
    ]"
  >
    <div class=" flex ml-10">
      <img class="h-12 w-16" src="/img/logo.png" />
      <span class="text-sm ml-1">
        <p class="text-lg font-bold">LEGON</p>
        <p class="text-xs">SEVENTH DAY ADVENTIST</p>
        <p class="text-xs">CHURCH</p>
      </span>
    </div>
    <div class="ml-12 text-xs font-bold">
      <ul>
        <router-link to="/"><li>HOME</li></router-link>
        <router-link to="/about">
          <li class="">ABOUT US +</li>
        </router-link>
        <li class="modal">LEADERSHIP +</li>
        <li class="modal">MINISTRIES +</li>
        <li class="modal">MISSIONS +</li>
        <li class="modal">MEDIA +</li>
        <li class="modal">CONTACT US +</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
.change_color {
  background: #3a7bd5; /*fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3a6073,
    #3a7bd5
  ); /* Chrome 10-25, Safari 5.1-6*/
  background: linear-gradient(
    to right,
    #3a6073,
    #3a7bd5
  ); /*W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

ul li {
  display: inline;
  padding: 20px;
  cursor: pointer;
}
</style>
