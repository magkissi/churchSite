<template>
  <div class="container">
    <div v-if="!flip" class=" lg:flex lg:w-full">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="lg:w-1/3 lg:ml-20"
      >
        <div class="mb-6 text-4xl font-bold text-center lg:mt-7">
          {{ title }}
        </div>
        <div class="p-2">{{ description }}</div>
        <div class="flex justify-center mt-8 mb-5">
          <div class="w-32 "><Button text="Read More" /></div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="image h-96 mb-20 lg:ml-48 lg:w-2/5 lg:mt-7"
      >
        <img class="resize w-full h-full " :src="image" />
      </div>
    </div>
    <div v-if="flip" class="w-full lg:flex lg:w-full">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="image h-96 mb-20 lg:mr-48 mt-12 lg:w-2/5 lg:ml-20"
      >
        <img class="w-full h-full " :src="image" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="lg:w-1/3"
      >
        <div class="mb-6 text-4xl font-bold text-center">{{ title }}</div>
        <div class="p-2">{{ description }}</div>
        <div class="flex justify-center mt-8 mb-5">
          <div class="w-32 "><Button text="Read More" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../button/Button.vue";
export default {
  name: "Feed",
  components: {
    Button,
  },
  props: {
    flip: {
      type: Boolean,
      default: false,
    },
    title: String,
    description: String,
    image: String,
  },
};
</script>

<style scoped>
.text {
  position: relative;
}

.image {
  position: relative;
}

.container {
  background: rgba(226, 224, 224, 0.3);
}
</style>
