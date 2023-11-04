<template>
  <div class="Home">
    <header-comp></header-comp>
  </div>
</template>

<script>
import Headers from "./Header.vue";
export default {
  name: "home-comp",
  components: {
    "header-comp": Headers,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style></style>
