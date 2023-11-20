<template>
  <div class="forecast">
    <div class="">
      <div class="forecast-button">
        <button
          type="button"
          class="hour-button btn btn-primary"
          @click="switchTo10Days"
        >
          Hourly
        </button>
        <button
          type="button"
          class="date-button btn btn-primary"
          @click="switchToHourly"
        >
          10 Days
        </button>
      </div>
      <!-- Theo thu -->
      <div class="row weather-days" v-if="showHourly">
        <div class="col-md-2">
          <span class="date">Monday</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <span class="mua">
              <img src="../assets/images/mua.png" alt="" />
            </span>
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">Tuesday</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">Thursday</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">Friday</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">Saturday</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">Sunday</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
      </div>
      <!-- <hr /> -->
      <!-- Theo gio -->
      <div class="row weather-hour" v-if="!showHourly">
        <div class="col-md-2">
          <span class="date">2PM</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <span class="mua">
              <img src="../assets/images/mua.png" alt="" />
            </span>
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">3PM</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">4PM</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">5PM</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">6PM</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
        <div class="col-md-2">
          <span class="date">7PM</span>
          <span class="anh">
            <img src="../assets/images/img01.png" alt="" />
          </span>
          <span class="temp">85°C</span>
          <span class="change">
            <img src="../assets/images/mua.png" alt="" />
            <span class="rain">15%</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/Forecast.css";
import store from "../store/store.js";
export default {
  name: "forecast-comp",
  components: {},

  // data() {
  //   return {
  //     showHourly: true,
  //   };
  // },

  computed: {
    showHourly() {
      return store.state.showHourly;
    },
  },

  methods: {
    switchToHourly() {
      store.commit("switchToHourly");
    },
    switchTo10Days() {
      store.commit("switchTo10Days");
    },
  },
};
</script>

<style></style>
