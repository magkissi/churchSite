<template>
  <div class="container w-full lg:h-auto">
    <img class="bg-image w-full" src="/img/worship.jpg" alt="" />

    <div class="overlay lg:h-auto">
      <div class="text-lg text-center lg:text-5xl font-extrabold mt-6">
        He shall feed his flock like a shepherd; <br />he shall gather the lambs
        with his arms, <br />and carry them in his bosom, <br />and shall gently
        lead those that are with young

        <br />
        <div class="text-2xl font-light lg:font-bold">Isaiah 40:11</div>
      </div>

      <div class="mt-16 flex flex-col w-full items-center  mb-16 lg:mt-32">
        <div
          class="text-lg text-black bg-white p-2 font-bold lg:text-2xl w-28 lg:w-auto"
        >
          JOIN OUR
        </div>
        <div class="online font-extrabold ">ONLINE <br /></div>

        <div class="text-4xl font-extrabold">STREAMING <br /></div>
        <div class="text-4xl">SERVICES</div>
        <div class="flex text-sm">
          <img class="w-6" src="/img/fb-icon.jpg" alt="" />
          <div class="border-r-2 ml-2 mr-2"></div>
          <a href="https://web.facebook.com/legonsda/videos"
            ><p>@legonsda</p></a
          >
        </div>
        <div class=" flex mt-3 text-sm">
          <img class="w-6" src="/img/ytube-icon.jpg" alt="" />
          <div class="border-r-2 ml-2 mr-2"></div>
          <a
            href="https://www.youtube.com/channel/UCfe8JJSXUsGQ3ZddGD8ARJw/videos"
            ><p>Legon SDA Church</p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  position: relative;
  z-index: 1;
}
.bg-image {
  height: 100vh;
}
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  color: #ffff;
  background: rgba(0, 0, 0, 0.3);
}
.online {
  color: rgb(26, 26, 170);
  font-size: 80px;
}
</style>
