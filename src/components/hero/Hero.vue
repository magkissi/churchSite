<template>
  <div>
    <div class="flex w-full">
      <carousel
        :per-page="1"
        :autoplayHoverPause="true"
        :autoplay="true"
        :loop="true"
        :speed="800"
      >
        <div v-if="heroes && heroes.length == 0" class="h-screen text-center">
          Page loading
        </div>
        <slide class="slide" v-for="hero in heroes" :key="hero.id">
          <img class="w-full h-screen" :src="hero.background.url" />
          <div class="overlay pl-3 lg:pl-80">
            <div class="text-xl font-bold lg:text-3xl">{{ hero.title }}</div>
            <div class="text-sm lg:text-xl">{{ hero.subtitle }}</div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Carousel,
    Slide,
  },

  created() {
    this.getHeroes();
  },

  methods: {
    ...mapActions({
      getHeroes: "home/getHeroes",
    }),
  },
  computed: {
    ...mapState({
      heroes: (state) => state.home.heroes,
    }),
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  color: #ffff;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  padding-top: 200px;
}
.slide {
  position: relative;
}
</style>
