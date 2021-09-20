<template>
  <div class="bg-image w-full">
    <img class="w-full" src="/img/worship.jpg" alt="" />

    <div class="overlay">
      <p class="text-center text-5xl font-extrabold mt-6">
        He shall feed his flock like a shepherd; <br />he shall gather the lambs
        with his arms, <br />and carry them in his bosom, <br />and shall gently
        lead those that are with young

        <br /><span class="text-2xl font-bold">Isaiah 40:11</span>
      </p>

      <div class="flex justify-between p-28 mb-16">
        <div class="flex flex-col">
          <span class="text-black bg-white p-2 ml-12 font-bold text-2xl w-40"
            >JOIN OUR</span
          >
          <span class="online font-extrabold ">ONLINE <br /></span>

          <span class="text-4xl font-extrabold">STREAMING <br /></span>
          <span class="text-4xl">SERVICES </span>
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
        <div class="">
          <img class="h-72" src="/img/table.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.bg-image {
  position: relative;
  z-index: 1;
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
