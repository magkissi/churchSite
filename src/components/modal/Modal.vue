<template>
  <div class="w-36 h-auto border-solid border-4 bg-gray-400">
    <p>{{ item1 }}</p>
    <p>{{ item2 }}</p>
    <p>{{ item3 }}</p>
    <p>{{ item4 }}</p>
    <p>{{ item5 }}</p>
    <p>{{ item6 }}</p>
    <p>{{ item7 }}</p>
    <p>{{ item8 }}</p>
    <p>{{ item9 }}</p>
    <p>{{ item10 }}</p>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    item1: String,
    item2: String,
    item3: String,
    item4: String,
    item5: String,
    item6: String,
    item7: String,
    item8: String,
    item9: String,
    item10: String,
  },
};
</script>

<style scoped></style>
