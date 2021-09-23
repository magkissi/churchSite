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
        <slide class="slide" v-for="hero in heroes" :key="hero.id">
          <img
            :src="
              `https://quiet-inlet-64588.herokuapp.com${hero.background.url}`
            "
          />
          <div class="overlay">
            <h1 class="text-4xl font-bold">{{ hero.title }}</h1>
            <p class="text-xl">{{ hero.subtitle }}</p>
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
img {
  width: 100%;
  height: 100vh;
}
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
  padding-left: 320px;
}
.slide {
  position: relative;
}
</style>
