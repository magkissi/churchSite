<template>
  <div class="home-container flex flex-col">
    <div class="line h-line text-white">
      <p class="location ml-80">
        Legon, Accra 23321 Accra, Ghana <br />
        <span class="hours text-lg font-normal"
          >Meeting Hours :
          <span class="text-sm"
            >Saturday - Sabbath Woship: 9am - 12:30pm | Wednessday - Prayer
            Meeting: 7pm - 8:00pm | Friday - Youth Hour: 7pm - 8:30pm</span
          ></span
        >
      </p>
    </div>
    <div class="line v-line"></div>
    <div class="hero"><Hero /></div>
    <div class="writting">
      Our church incorporates God’s family into our fellowship. <br />We provide
      a warm, authentic community, welcoming new <br />believers into the body
      of Christ through baptism
    </div>
    <div v-for="(homeSection, index) in homeSections" :key="index">
      <Feed
        :flip="(index + 1) % 2 == 0"
        :title="homeSection.title"
        :description="homeSection.description"
        :image="`http://localhost:1337${homeSection.image.url}`"
      />
    </div>

    <OnlineService />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "../components/hero/Hero.vue";
import { mapState, mapActions } from "vuex";
import Feed from "../components/hero/Feed.vue";
import OnlineService from "../components/hero/OnlineService.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Feed,
    OnlineService,
  },
  created() {
    this.getHomeSections();
  },
  methods: {
    ...mapActions({
      getHomeSections: "hero/getHomeSections",
    }),
  },
  computed: {
    ...mapState({
      homeSections: (state) => state.hero.homeSections,
    }),
  },
};
</script>

<style scoped>
.home-container {
  position: relative;
}

.line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  height: 100vh;
}
.h-line {
  border-top: 1px solid rgb(138, 136, 136);
  border-bottom: 1px solid rgb(138, 136, 136);
  margin-top: 100px;
  height: 500px;
}
.v-line {
  border-left: 1px solid rgb(138, 136, 136);
  border-right: 1px solid rgb(138, 136, 136);
  margin-left: 300px;
  margin-right: 300px;
}
.location {
  margin-top: 520px;
  font-size: 25px;
  font-weight: 600;
}
.writting {
  margin-top: 80px;
  margin-bottom: 100px;
  margin-left: 150px;
  padding-left: 15px;
  border-left: 3px solid rgb(212, 166, 150);
  font-size: 30px;
}
</style>
