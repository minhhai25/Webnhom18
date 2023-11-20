<template>
  <div class="home">
    <div class="container">
      <headers></headers>
      <router-view></router-view>
 
    </div>
  </div>
</template>
<script>

import Headers from "./Header.vue";
export default {
  components: {

    Headers,
 
  },
  name,
};
</script>
<style>
.container {
  border: none !important;
}
</style>
