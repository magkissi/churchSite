<template>
  <div class="about mb-32">
    <div class="pt-48">
      <History />
    </div>
  </div>
</template>

<script>
import History from "../components/about/History.vue";

export default {
  name: "About",
  components: {
    History,
  },
};
</script>
<style scoped>
.about {
  background: #16162b;
}
</style>
