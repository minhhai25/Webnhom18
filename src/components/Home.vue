<template>
  <div class="Home">
    <div class="forecast-wrapper">
      <div class="forecast-switcher-wrapper">
        <div class="forecast-switcher">
          
          <button @click="switchToHourly">Hourly</button>
          <button @click="switchTo10Days">10 Days</button>
        </div>
      </div>
      <div class="hours-wrapper" v-if="showHourly">aaaaaaaaaa</div>
      <div class="days-wrapper" v-if="!showHourly">vvvvvvvvvvvvv</div>
    </div>
 
  </div>
</template>

<script>

export default {
  name: "home-comp",
  components: {
  
  },

  data() {
    return {
      showHourly: true,
    };
  },

  methods: {
    switchToHourly() {
      this.showHourly = true;
    },
    switchTo10Days() {
      this.showHourly = false;
    },
  },
};
</script>

<style></style>
