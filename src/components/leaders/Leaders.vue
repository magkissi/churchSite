<template>
  <div
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    class="container position relative w-full"
  >
    <div class="absolute z-10 text-white mt-72 ml-10">
      <p class="text-3xl">{{ name }}</p>
      <p class="text-lg">{{ position }}</p>
    </div>
    <div class="position">
      <img class="w-96 h-96" :src="src" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Leaders",
  props: {
    src: String,
    name: String,
    position: String,
  },
};
</script>
<style scoped>
.position {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.container {
  height: 500px;
}
</style>
