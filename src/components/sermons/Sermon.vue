<template>
  <div class="container w-80 h-96 ml-10">
    <img class="h-52 w-full mb-7" :src="src" :alt="alt" />

    <p class="title ml-5 text-2xl mt-2 mb-10">{{ title }}</p>
    <div class="border ml-36"></div>
    <div class="w-20 ml-5 mb-3"><Button text="view" /></div>
    <strong
      ><p class="ml-5 text-xs">{{ date }}</p></strong
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
