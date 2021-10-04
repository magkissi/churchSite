<template>
  <div class="about mb-32">
    <div class="pt-48">
      <History />
      <Contact />
    </div>
  </div>
</template>

<script>
import History from "../components/about/History.vue";
import Contact from "../components/contact/Contact.vue";
export default {
  name: "About",
  components: {
    History,
    Contact,
  },
};
</script>
<style scoped>
.about {
  background: #16162b;
}
</style>
