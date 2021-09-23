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
        :image="`${url}${homeSection.image.url}`"
      />
    </div>
    <div class="department flex flex-col w-full">
      <span class="text-5xl pt-16 pb-16 text-center">Leadership</span>
      <div class="flex ml-10">
        <Leaders
          name="nhtferdcv"
          department="nhbgdfter"
          src="/img/worship.jpg"
        />
        <div>
          <p class="mr-16">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Est
            perferendis, maiores tempore doloribus et architecto aliquid
            voluptatem minus quidem. Consequuntur aperiam debitis nulla
            <br />exercitationem! Eius impedit id enim quibusdam dolor.
          </p>
          <div class="w-32 mt-4"><Button text="See More" /></div>
        </div>
        <Leaders
          name="nhtferdcv"
          department="nhbgdfter"
          src="/img/worship.jpg"
        />
      </div>
    </div>
    <div
      class="sermon flex flex-col justify-center items-center w-full mt-44 mb-44"
    >
      <div class="flex w-full justify-between">
        <p class="text-5xl ml-40 mb-16">Sermons</p>
        <p class="mr-40">
          Explore & listen to the latest seermons by our church’s pastors added
          daily and available<br />
          for download in all popular formats.
        </p>
      </div>
      <div v-for="sermon in sermons" :key="sermon.id" class="flex">
        <Sermon
          :src="`${url}${sermon.image.url}`"
          :title="sermon.title"
          :date="sermon.date"
        />
      </div>
    </div>
    <OnlineService />
    <div class="consult flex flex-col justify-center items-center">
      <div class="flex w-full justify-between pl-72 pr-96 mb-6">
        <div class="text-4xl">FREE CONSULTATION</div>
        <div class="writting2">Get an appointment with our Pastor</div>
      </div>

      <div class="flex">
        <div><Input name="name" placeholder="Your Name" /></div>
        <div class="input pl-9 pr-9">
          <Input name="email" placeholder="Your E-mail" />
        </div>
        <div>
          <Input name="phone" placeholder="Your phone number" />
        </div>
        <div class="pl-9 w-60"><Button text="Make an appointment" /></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "../components/hero/Hero.vue";
import { mapState, mapActions } from "vuex";
import Feed from "../components/hero/Feed.vue";
import OnlineService from "../components/hero/OnlineService.vue";
import Input from "../components/input/Input.vue";
import Button from "../components/button/Button.vue";
import Leaders from "../components/leaders/Leaders.vue";
import Sermon from "../components/sermons/Sermon.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Feed,
    OnlineService,
    Input,
    Button,
    Leaders,
    Sermon,
  },
  created() {
    this.getHomeSections();
    this.getSermons();
  },
  data() {
    return {
      url: process.env.VUE_APP_API_URL,
    };
  },
  methods: {
    ...mapActions({
      getHomeSections: "home/getHomeSections",
      getSermons: "home/getSermons",
    }),
  },
  computed: {
    ...mapState({
      homeSections: (state) => state.home.homeSections,
      sermons: (state) => state.home.sermons,
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
.consult {
  margin-top: 100px;
  margin-bottom: 100px;
  height: 300px;
  color: #ffff;
  background: #1a1a3b;
}
.writting2 {
  color: rgba(138, 136, 136, 0.6);
  font-size: 25px;
}
.department {
  background: #1a1a3b;
  color: #ffff;
}
</style>
