<template>
  <div class="home">
    <div class="container">
      <h1>Weather</h1>
      <headers></headers>
      <weather-page></weather-page>
      <forecast></forecast>
    </div>
  </div>
</template>
<script>
import WeatherPage from "./Weather.vue";
import Forecast from "./Forecast.vue";
import Headers from "./Header.vue";
export default {
  components: {
    // HelloWorld
    WeatherPage,
    Forecast,
    Headers,
  },
  name,
};
</script>
<style></style>
