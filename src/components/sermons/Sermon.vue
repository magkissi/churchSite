<template>
  <div class="container w-40 h-auto lg:w-72 lg:h-96">
    <img class="h-32 w-full mb-2 lg:h-48" :src="src" :alt="alt" />

    <div class="ml-2 text-sm mt-2 mb-2 lg:text-2xl lg:mb-11">{{ title }}</div>
    <div class="border ml-28"></div>
    <div class="w-16 ml-2 mb-5 h-7"><Button text="view" /></div>
    <strong
      ><p class="ml-2 text-xs lg:mt-12">{{ date }}</p></strong
    >
  </div>
</template>

<script>
import Button from "../button/Button.vue";

export default {
  name: "Sermon",
  components: {
    Button,
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
/* .title {
  border-bottom: 1px solid rgba(138, 136, 136, 0.3);
} */
</style>
