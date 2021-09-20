<template>
  <div class="container">
    <div v-if="!flip" class="flex w-full">
      <div class="text">
        <h2 class="mb-6 text-4xl font-bold">{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <div class="image h-96 mb-20 ml-48">
        <img class="w-full h-full" :src="image" />
      </div>
    </div>

    <div v-if="flip" class="flex w-full justify-center">
      <div class="image h-96 mb-20 mr-48">
        <img class="w-full h-full" :src="image" />
      </div>
      <div class="text">
        <h2 class="mb-6 text-4xl font-bold">{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feed",
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
  width: 40%;
  padding-left: 50px;
  padding-right: 80px;
  position: relative;
  animation: leftMove ease-out;
  animation-duration: 2s;
}
@keyframes leftMove {
  from {
    left: 0;
  }
  to {
    left: 50px;
  }
}
.image {
  width: 50%;
  position: relative;
  animation: rightMove 2s;
}
@keyframes rightMove {
  from {
    opacity: 0;
    transform: scale(0.7, 0.7);
  }
  to {
    opacity: 1;
  }
}
.container {
  background: rgba(226, 224, 224, 0.3);
}
</style>
