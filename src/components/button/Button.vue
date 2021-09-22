<template>
  <button class="bttn " type="submit">{{ text }}</button>
</template>

<script>
export default {
  name: "Input",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.bttn {
  border-radius: 4px;
  color: #ffff;
  background: rgb(212, 166, 150);
  padding: 8px 0px 8px 12px;
  width: 100%;
}
.bttn:hover {
  color: black;
  cursor: pointer;
  background: none;
  border: 1px solid rgb(226, 30, 30);
}
</style>
