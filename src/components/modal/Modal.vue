<template>
  <div class="w-36 h-auto border-solid border-1 bg-gray-200 p-2 text-black">
    <router-link :to="path1"
      ><p>{{ item1 }}</p></router-link
    >
    <router-link :to="path2"
      ><p>{{ item2 }}</p></router-link
    >
    <router-link :to="path3"
      ><p>{{ item3 }}</p></router-link
    >
    <router-link :to="path4"
      ><p>{{ item4 }}</p></router-link
    >
    <router-link :to="path5"
      ><p>{{ item5 }}</p></router-link
    >
    <router-link :to="path6"
      ><p>{{ item6 }}</p></router-link
    >
    <router-link :to="path7"
      ><p>{{ item7 }}</p></router-link
    >
    <router-link :to="path8"
      ><p>{{ item8 }}</p></router-link
    >
    <router-link :to="path9"
      ><p>{{ item9 }}</p></router-link
    >
    <router-link :to="path10"
      ><p>{{ item10 }}</p></router-link
    >
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
    path1: String,
    path2: String,
    path3: String,
    path4: String,
    path5: String,
    path6: String,
    path7: String,
    path8: String,
    path9: String,
    path10: String,
  },
};
</script>

<style scoped></style>
