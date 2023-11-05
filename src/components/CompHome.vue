<template>
  <div class = " home">
    <h1>Weather</h1>
    <weather-page></weather-page>
    <header-comp></header-comp>
  </div>
</template>
<script>
import WeatherPage from './Weather.vue';
import Headers from "./Header.vue";

export default {
 components: {
    // HelloWorld
    WeatherPage,
     "header-comp": Headers,
  },
  name

}
</script>
<style>
</style>
