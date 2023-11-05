<template>
  <div id="test">
    <div class="container">
      <div class="weather-details">
        <div class="weather-details__basic">
          <div class="weather-details__current">
            <img
              src="../assets/images/1.png"
              alt="Mostly Clear"
              class="weather-icon"
            />
            <div class="weather-details__current__desc">Mostly Clear</div>
          </div>
          <div class="weather-details__today">
            <div class="weather-details__today__temp">
              <span>
                <span class="weather__unit--metric" aria-label="27° celsius">
                  <span aria-hidden="true">27°</span>
                </span>
              </span>
            </div>

            <div class="row">
              <div class="weather-details__today__details">
                <div class="cod-md-4">
                  <img src="../assets/images/upload.png" alt="" />

                  <span>
                    <span
                      class="weather__unit--metric"
                      aria-label="31° celsius"
                    >
                      <span aria-hidden="true">31°</span>
                    </span>
                  </span>
                </div>
                <div class="cod-md-4">
                  <img src="../assets/images/dowload.png" alt="" />
                  <span>
                    <span class="weather__unit--metric" aria-label="24° celsius"
                      ><span aria-hidden="true">24°</span></span
                    >
                  </span>
                </div>
                <div class="cod-md-4">
                  <img src="../assets/images/mua.png" alt="" />
                  <span>
                    <span class="weather__unit--metric" aria-label="humidity"
                      ><span aria-hidden="true">54%</span></span
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="weather-details__additional-info">
          <div class="flex-col">6:00AM<span class="label">Sunrise</span></div>
          <div class="flex-col">83%<span class="label">Humidity</span></div>
          <div class="flex-col">
            29.86 in<span class="label">Pressure</span>
          </div>
          <div class="flex-col">--<span class="label">UV Index</span></div>
          <div class="flex-col">6:00AM<span class="label">Sunrise</span></div>
          <div class="flex-col">5km/h<span class="label">Wind</span></div>
          <div class="flex-col">24°<span class="label">Dew Point</span></div>
          <div class="flex-col">10 mi<span class="label">Visibility</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/Weather.css";
export default {
  name,
  data() {
    return {};
  },
  methods: {
    // async getApi() {
    //     try {
    //          const response = await axios.get(
    //       "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=e8b73f475dc0329093efe408af675a72"
    //     );
    //         console.log();
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },
  },
};
</script>

<style scoped></style>
