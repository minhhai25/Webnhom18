<template>
  <div id="app">
    <comp-home></comp-home>
    <!-- <weather-page></weather-page> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import CompHome from "./components/CompHome.vue";
// import WeatherPage from './components/Weather.vue';
// import HelloWorld from './components/HelloWorld.vue'
//import CompHome from './components/CompHome.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
    // WeatherPage,
    CompHome,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
