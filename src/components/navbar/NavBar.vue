<template>
  <div
    :class="[
      { change_color: scrollPosition > 50 },
      'md h-24 flex  text-white pt-10',
    ]"
  >
    <div class=" flex items-center ml-10 mb-5">
      <img class="w-10 h-10" src="/img/logo.png" />
      <span class="text-sm ml-1">
        <p class="text-lg font-bold">LEGON</p>
        <p class="text-xs">SEVENTH DAY ADVENTIST</p>
        <p class="text-xs">CHURCH</p>
      </span>
    </div>
    <div class="flex justify-center items-center ml-20 text-xs font-bold te">
      <router-link to="/"><div class="pb-5">HOME</div></router-link>

      <div
        class="flex flex-col ml-5 mr-5 relative pb-5"
        @mouseover="details1 = true"
        @mouseleave="details1 = false"
      >
        <div class="cursor-pointer">
          ABOUT US +
        </div>

        <span v-show="details1" class=" mt-5 absolute">
          <Modal
            item1="History"
            item2="Fundamental Belifs"
            item3="Core Values"
            item4="Statistics"
            item5="Activities"
          />
        </span>
      </div>

      <div
        class="flex flex-col relative pb-5"
        @mouseover="details2 = true"
        @mouseleave="details2 = false"
      >
        LEADERSHIP +
        <span class="mt-5 absolute" v-show="details2">
          <Modal
            item1="General Conference"
            item2="Union"
            item3="District"
            item4="Local"
          />
        </span>
      </div>
      <div
        class="flex flex-col relative ml-5 mr-5 pb-5"
        @mouseover="details3 = true"
        @mouseleave="details3 = false"
      >
        MINISTRIES +
        <span class="mt-5 absolute" v-show="details3">
          <Modal
            item1="Personal Ministry"
            item2="Children"
            item3="Sabbath School"
            item4="Home and Family life"
            item5="Youth Ministry"
            item6="Women and ladies Ministry"
            item7="Men's Ministry"
          />
        </span>
      </div>

      <div
        class="flex flex-col relative ml-5 mr-5 pb-5"
        @mouseover="details3 = true"
        @mouseleave="details3 = false"
      >
        MEDIA +
      </div>
      <div class="ml-5 mr-5 pb-5">CONTACT US +</div>
    </div>
  </div>
</template>

<script>
import Modal from "../modal/Modal.vue";
export default {
  name: "NavBar",
  components: {
    Modal,
  },

  data() {
    return {
      scrollPosition: null,
      details1: false,
      details2: false,
      details3: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
.change_color {
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.modal {
  left: 350px;
  top: 60px;
  right: 0;
}
</style>
