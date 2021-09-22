<template>
  <input
    :v-model="handleInput"
    class="p-4 w-full"
    type="text"
    :name="name"
    :value="value"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    name: String,
    value: String,
    placeholder: String,
  },
};
</script>
