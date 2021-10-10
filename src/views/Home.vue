<template>
  <div class="home-container lg:flex flex-col">
    <div class="line h-line text-white">
      <div class="location font-bold ml-3">
        <div class="text-sm lg:text-3xl lg:ml-80">
          Legon, Accra 23321 Accra, Ghana
        </div>
        <div class="hours text-xs font-normal lg:text-xl lg:ml-80">
          Meeting Hours :
          <div class="text-sm lg:text-sm">
            Saturday - Sabbath Woship : 9am - 12:30pm <br />Wednessday - Prayer
            Meeting : 7pm - 8:00pm <br />Friday - Youth Hour : 7pm - 8:30pm
          </div>
        </div>
      </div>
    </div>
    <div class="line v-line"></div>
    <div class="hero"><Hero /></div>
    <div
      class="text-lg ml-3 mt-12 mb-12 pl-3 writting lg:ml-72 lg:text-2xl lg:w-2/4"
    >
      Our church incorporates God’s family into our fellowship. We provide a
      warm, authentic community, welcoming new believers into the body of Christ
      through baptism
    </div>

    <div v-for="(homeSection, index) in homeSections" :key="index">
      <Feed
        :flip="(index + 1) % 2 == 0"
        :title="homeSection.title"
        :description="homeSection.description"
        :image="homeSection.image.url"
      />
    </div>
    <div class="leaders flex flex-col w-full">
      <span class="text-5xl pt-16 pb-16 text-center">Leadership</span>

      <div class=" lg:justify-center lg:flex">
        <div v-if="leaders.length !== 0" class="">
          <Leaders
            :leaderName="leaders[0].name"
            :position="leaders[0].topic"
            :src="leaders[0].image[0].url"
          />
        </div>

        <div class=" flex flex-col items-center lg:w-96">
          <div class="p-2 lg:ml-16 lg:mr-16">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            perferendis, maiores tempore doloribus et architecto aliquid
            voluptatem minus quidem. Consequuntur aperiam debitis nulla
            exercitationem! Eius impedit id enim quibusdam dolor.
          </div>
          <div class="w-32 mt-4"><Button text="See More" /></div>
        </div>
        <div v-if="leaders.length !== 0" class="mt-16 lg:mt-0">
          <Leaders
            :leaderName="leaders[1].name"
            :position="leaders[1].topic"
            :src="leaders[1].image[0].url"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full mt-12 mb-44">
      <div class="flex w-auto justify-between">
        <div class="text-5xl mb-16">Sermons</div>
        <div class="lg:mr-40 lg:ml-40 lg:mt-4">
          Explore & listen to the latest seermons by our church’s pastors added
          daily.
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 lg:flex">
        <div class="mb-5" v-for="sermon in sermons" :key="sermon.id">
          <Sermon
            :src="sermon.image[0].url"
            :alt="sermon.image.name"
            :title="sermon.title"
            :date="sermon.date"
          />
        </div>
      </div>
    </div>
    <OnlineService />
    <div class="consult flex flex-col items-center w-full lg:h-96">
      <div
        class="flex w-full lg:justify-between lg:pl-72 lg:pr-96 mb-12  mt-16 p-3"
      >
        <div class="text-2xl lg:text-4xl">FREE CONSULTATION</div>
        <div class="writting2">Get an appointment with our Pastor</div>
      </div>

      <div class="items-center lg:flex lg:justify-center ">
        <div class="w-72"><Input name="name" placeholder="Your Name" /></div>
        <div class="w-72 mt-8 mb-8 lg:ml-10 lg:mr-10">
          <Input name="email" placeholder="Your E-mail" />
        </div>
        <div class="w-72">
          <Input name="phone" placeholder="Your phone number" />
        </div>
        <div class="w-72 mt-8 mb-8 lg:mt-0 lg:ml-10">
          <Button text="Make an appointment" color="#302b63" />
        </div>
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
// import { Carousel, Slide } from "vue-carousel";

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
    // Carousel,
    // Slide,
  },
  created() {
    this.getHomeSections();
    this.getSermons();
    this.getLeaders();
  },

  methods: {
    ...mapActions({
      getHomeSections: "home/getHomeSections",
      getSermons: "home/getSermons",
      getLeaders: "home/getLeaders",
    }),
  },
  computed: {
    ...mapState({
      homeSections: (state) => state.home.homeSections,
      sermons: (state) => state.home.sermons,
      leaders: (state) => state.home.leaders,
    }),
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
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
}
.writting {
  border-left: 3px solid rgb(212, 166, 150);
}
.consult {
  margin-top: 100px;
  margin-bottom: 100px;
  color: #ffff;
  background: rgb(212, 166, 150);
}
.writting2 {
  color: #24232399;
  font-size: 15px;
}
.leaders {
  background: #1a1a3b;
  color: #ffff;
}
</style>
