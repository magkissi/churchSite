<template>
  <div class="container w-96 h-96 ml-10">
    <carousel
      :per-page="1"
      :autoplayHoverPause="true"
      :autoplay="true"
      :loop="true"
      :speed="10000"
    >
      <slide>
        <img class="h-52 w-full mb-7" :src="src" :alt="alt" />
        <div class="w-20 ml-5"><Button text="view" /></div>
        <p class="title ml-5 text-2xl mt-2 mb-10">{{ title }}</p>
        <p class="ml-5 text-xs">{{ date }}</p>
      </slide>
    </carousel>
  </div>
</template>

<script>
import Button from "../button/Button.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Sermon",
  components: {
    Button,
    Carousel,
    Slide,
  },
  props: {
    src: String,
    alt: String,
    title: String,
    date: String,
  },
};
</script>

<style scoped>
.container {
  box-shadow: 3px 3px 21px -5px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 3px 3px 21px -5px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 3px 3px 21px -5px rgba(0, 0, 0, 0.55);
}
.title {
  border-bottom: 1px solid rgba(138, 136, 136, 0.3);
}
</style>
