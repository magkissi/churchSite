<template>
  <div class="footer flex flex-col w-full text-white pt-44">
    <div class="flex flex-col text-center">
      <div class="flex justify-center items-center">
        <img class="w-10 mr-2" src="/img/logo.png" alt="" />
        <p class="text-sm font-bold">LESDAC</p>
      </div>

      <div class="elements text-sm font-bold mt-12 mb-12 ml-32 mr-32 pb-7 ">
        <ul>
          <li class="modal">Home</li>
          <li class="modal">Departments</li>
          <li class="modal">Donation</li>
          <li class="modal">Gallery</li>
          <li class="modal">Contact Us</li>
        </ul>
      </div>
      <div class="elements ml-72 mr-72 mb-12 pb-7 text-2xl">
        Call Us <br /><br /><span class="phone">+233 2255 481 458</span>
      </div>
      <p>Legon, Accra 23321 Accra, Ghana</p>
      <p class="privacy">@ Lesdac 2021. All rights reserved. Privacy Policy</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background: #16162b;
  height: 100vh;
}
ul li {
  display: inline;
  padding: 20px;
  cursor: pointer;
}
.elements {
  border-bottom: 1px solid rgba(138, 136, 136, 0.3);
}
.phone {
  color: rgb(212, 166, 150);
  font-size: 50px;
}
.privacy {
  color: rgba(138, 136, 136, 0.5);
}
</style>
