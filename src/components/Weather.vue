<template>
    <div id="test">
        <div class="container">
            <div class="weather-details">
                <div class="weather-details__basic">
                    <div class="weather-details__current">
                        <img src="../assets/images/1.png" alt="Mostly Clear" class="weather-icon">
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
                        <div class="weather-details__today__details ">
                            <div class="cod-md-4">
                                <img src="../assets/images/upload.png" alt="" >

                                
                       

                                <span>
                                    <span class="weather__unit--metric" aria-label="31° celsius">
                                        <span aria-hidden="true">31°</span>
                                    </span>
                                </span>
                            </div>
                            <div class="cod-md-4">
                                <img src="../assets/images/dowload.png" alt="" >
                                    <span>
                                        <span class="weather__unit--metric" aria-label="24° celsius"><span aria-hidden="true">24°</span></span>
                                    </span>
                            </div>
                            <div class="cod-md-4">
                                
                                    <img src="../assets/images/mua.png" alt="" >
                                    <span>
                                        <span class="weather__unit--metric" aria-label="humidity"><span aria-hidden="true">54%</span></span>
                                    </span>
                                    
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="weather-details__additional-info">
                    <div class="flex-col">6:00AM<span class="label">Sunrise</span></div>
                    <div class="flex-col">83%<span class="label">Humidity</span></div>
                    <div class="flex-col">29.86 in<span class="label">Pressure</span></div>
                    <div class="flex-col">--<span class="label">UV Index</span></div>
                    <div class="flex-col">6:00AM<span class="label">Sunrise</span></div>
                    <div class="flex-col">5km/h<span class="label">Wind</span></div>
                    <div class="flex-col">24°<span class="label">Dew Point</span></div>
                    <div class="flex-col">10 mi<span class="label">Visibility</span></div>
                </div>
  <div id="test">
    <!-- <div class="container"> -->
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
          <div class="weather-details__today__details">
            <div class="high-temp">
              <!-- <svg aria-label="highest temperature" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M6.99815 2.33334L10.8075 5.898C11.0575 6.148 11.0575 6.55334 10.8075 6.80267C10.5575 7.05267 10.1528 7.05267 9.90281 6.80267L7.66481 4.56467V13.6667H6.33081V4.56467L4.09281 6.80267C3.84281 7.05267 3.43748 7.05267 3.18748 6.80267C2.93748 6.55334 2.93748 6.148 3.18748 5.898L6.99815 2.33334ZM13 0.333336C13.3682 0.333336 13.6666 0.631813 13.6666 1C13.6666 1.36819 13.3682 1.66667 13 1.66667H0.99998C0.63179 1.66667 0.333313 1.36819 0.333313 1C0.333313 0.631813 0.63179 0.333336 0.99998 0.333336H13Z">
                                </path>
                            </svg> -->
              <span>
                <span class="weather__unit--metric" aria-label="31° celsius">
                  <span aria-hidden="true">31°</span>
                </span>
              </span>
            </div>
            <div class="low-temp">
              <span>
                <span class="weather__unit--metric" aria-label="24° celsius"
                  ><span aria-hidden="true">24°</span></span
                >
              </span>
            </div>
            <div class="humidity">
              <svg
                aria-label="humidity"
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M4.57862 0.733744C4.37805 0.924318 0 5.4431 0 9C0 11.5764 2.05916 13.6667 5 13.6667C7.94055 13.6667 10 11.5788 10 9C10 5.55182 5.61738 0.932934 5.41653 0.738052L5 0.333336L4.57862 0.733744ZM5.23851 10.5159C4.92326 10.5212 4.67276 10.7523 4.67876 11.0323C4.68475 11.3091 4.93895 11.5296 5.24906 11.5296H5.26019C6.78339 11.5035 8.02272 10.3821 8.02272 9.02929C8.02272 8.58808 7.89119 8.15447 7.64242 7.7751C7.48351 7.53333 7.13402 7.45198 6.86185 7.59238C6.58967 7.73328 6.49752 8.04372 6.65615 8.28549C6.80336 8.51028 6.88153 8.76725 6.88153 9.02929C6.88153 9.8334 6.14432 10.5004 5.23851 10.5159Z"
                ></path>
              </svg>
              <span>54%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="weather-details__additional-info">
        <div class="flex-col">6:00AM<span class="label">Sunrise</span></div>
        <div class="flex-col">83%<span class="label">Humidity</span></div>
        <div class="flex-col">29.86 in<span class="label">Pressure</span></div>
        <div class="flex-col">--<span class="label">UV Index</span></div>
        <div class="flex-col">6:00AM<span class="label">Sunrise</span></div>
        <div class="flex-col">5km/h<span class="label">Wind</span></div>
        <div class="flex-col">24°<span class="label">Dew Point</span></div>
        <div class="flex-col">10 mi<span class="label">Visibility</span></div>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
import "../assets/css/Weather.css";
export default {
  name  ,
   data() {
    return {
        
    }
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
}
</script>

<style scoped></style>
