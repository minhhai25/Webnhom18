<template>
  <div class="home">
    <div class="container">
      <headers></headers>
      <router-view></router-view>
      <!-- <seven-days-vue></seven-days-vue> -->
      <!-- <weather-page></weather-page>
      <forecast></forecast>  -->
    </div>
  </div>
</template>
<script>
// import SevenDaysVue from "./SevenDays.vue";
// import WeatherPage from "./Weather.vue";
// import Forecast from "./Forecast.vue";
import Headers from "./Header.vue";
export default {
  components: {
    // // HelloWorld
    // WeatherPage,
    // Forecast,
    Headers,
    // SevenDaysVue,
  },
  name,
};
</script>
<style>
.container {
  border: none !important;
}
</style>
