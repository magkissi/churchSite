<template>
  <div
    :class="[
      { change_color: scrollPosition > 50 },
      ' h-24 text-white pt-10 flex w-full',
    ]"
  >
    <div class="flex items-center ml-10 mb-5">
      <img class="w-10 h-10" src="/img/logo.png" />
      <span class="text-sm ml-1">
        <p class="text-lg font-bold">LEGON</p>
        <p class="text-xs">SEVENTH DAY ADVENTIST</p>
        <p class="text-xs">CHURCH</p>
      </span>
    </div>
    <div>
      <div class="ml-32">
        <img
          @click="handleClick"
          class="w-8 cursor-pointer"
          src="/img/menu.png"
          alt=""
        />
      </div>
      <div
        v-if="showNavItems"
        class="bg-gray-200 w-auto flex mt-12 text-xs font-bold text-black pt-3 pl-2"
        @mouseleave="showNavItems = false"
      >
        <router-link to="/"><div class="">HOME</div></router-link>

        <div
          class="flex flex-col ml-5 mr-5 relative"
          @mouseover="details1 = true"
          @mouseleave="details1 = false"
        >
          <div class="cursor-pointer">
            ABOUT US +
          </div>

          <span v-show="details1" class=" mt-8 absolute">
            <Modal
              item1="History"
              item2="Fundamental Belifs"
              item3="Core Values"
              item4="Activities"
              path1="/About"
              path2="/Beliefs"
              path3="/Values"
              path4="/Activities"
            />
          </span>
        </div>

        <div
          class=" flex flex-col relative cursor-pointer pb-5"
          @mouseover="details2 = true"
          @mouseleave="details2 = false"
        >
          LEADERSHIP +
          <span class="mt-8 absolute" v-show="details2">
            <Modal
              item1="General Conference"
              item2="Union"
              item3="District"
              item4="Local"
              path1="/conference"
              path2="/conference"
              path3="/district"
              path4="/local"
            />
          </span>
        </div>
        <div
          class="flex flex-col relative ml-5 mr-5 cursor-pointer"
          @mouseover="details3 = true"
          @mouseleave="details3 = false"
        >
          MINISTRIES +
          <span class="mt-8 absolute" v-show="details3">
            <Modal
              item1="Children"
              item2="Home and Family life"
              item3="Youth "
              item4="Women and ladies"
              item5="Men"
              path1="/children"
              path2="/familyLife"
              path3="/youth"
              path4="/women&ladies"
              path5="/men"
            />
          </span>
        </div>

        <router-link to="/media"
          ><div>
            MEDIA +
          </div></router-link
        >
        <router-link to="/contact">
          <div class="ml-5 mr-5">CONTACT US +</div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../modal/Modal.vue";
export default {
  name: "SmallScreenNav",
  components: {
    Modal,
  },

  data() {
    return {
      scrollPosition: null,
      showNavItems: false,
      details1: false,
      details2: false,
      details3: false,
      details4: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    handleClick() {
      this.showNavItems = !this.showNavItems;
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
</style>
