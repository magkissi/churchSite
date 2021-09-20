<template>
  <div class="about">
    <h1>Legon SDA church</h1>
    <div v-for="category in categories" v-bind:key="category.id">
      {{ category.infos[0].title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  created() {
    this.getCategories();
  },
  methods: {
    ...mapActions({
      getCategories: "catInfo/getCategories",
    }),
  },
  computed: {
    ...mapState({
      categories: (state) => state.catInfo.categories,
    }),
  },
};
</script>
