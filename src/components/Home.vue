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
    <!-- <header-comp></header-comp> -->
    <!-- <div class="forecast-wrapper">
      <div class="forecast-switcher-wrapper">
        <div class="forecast-switcher">
          <button>Hourly</button><button>10 Days</button>
        </div>
      </div>
      <div class="hours-wrapper"></div>
      <div class="days-wrapper"></div>
    </div> -->
  </div>
</template>

<script>
// import Headers from "./Header.vue";
export default {
  name: "home-comp",
  components: {
    // "header-comp": Headers,
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
