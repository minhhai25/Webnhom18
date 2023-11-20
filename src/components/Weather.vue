<template>
  <div id="test">
    
    <div class="weather-details" 
  
    >
      <!-- <div class="input-wrapper">
      <input type="text" v-model="cityName" placeholder="Enter city name" />
      <button @click="getWeatherData">Get Weather</button>
    </div> -->
      <div class="weather-details__basic" >
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
                <span aria-hidden="true">{{currentTemperature}}°C</span>
              </span>
            </span>
          </div>

          <div class="row">
            <div class="weather-details__today__details">
              <div class="cod-md-4">
                <img src="../assets/images/upload.png" alt="" />

                <span>
                  <span class="weather__unit--metric" aria-label="31° celsius">
                    <span aria-hidden="true">{{maxTemp}}°</span>
                  </span>
                </span>
              </div>
              <div class="cod-md-4">
                <img src="../assets/images/dowload.png" alt="" />
                <span>
                  <span class="weather__unit--metric" aria-label="24° celsius"
                    ><span aria-hidden="true">{{minTemp}}°</span></span
                  >
                </span>
              </div>
              <div class="cod-md-4">
                <img src="../assets/images/nuoc.png" alt="" class="img-nuoc" />
                <span>
                  <span class="weather__unit--metric" aria-label="humidity"
                    ><span aria-hidden="true">{{humidity}}%</span></span
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weather-details__additional-info">
        <div class="flex-col">6:00AM<span class="label">Sunrise</span></div>
        <div class="flex-col">{{humidity}}%<span class="label">Humidity</span></div>
        <div class="flex-col">{{pressure}} in<span class="label">Pressure</span></div>
        <div class="flex-col">--<span class="label">UV Index</span></div>
        <div class="flex-col">6:00AM<span class="label">Sunrise</span></div>
        <div class="flex-col">{{wind}}km/h<span class="label">Wind</span></div>
        <div class="flex-col">24°<span class="label">Dew Point</span></div>
        <div class="flex-col">10 mi<span class="label">Visibility</span></div>
      </div>
    </div>
  </div>

</template>

<script>
import "../assets/css/Weather.css";
// import Header from  "./Header.vue";
import { mapState } from 'vuex';
import axios from "axios";

export default {
  name,
 
     computed: {
    ...mapState(['cityName']),
  },
  data() {
    return {
      // cityName:"",
      weatherData:[],
      currentTemperature: '',
      humidity: '',
      maxTemp:'',
      minTemp: '',
    pressure: '',
    wind: '',
    
    };
  },
  methods: {
     async  getWeatherData() {
            //  console.log(this.cityName)
      try {
           const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=e8b73f475dc0329093efe408af675a72`
        );
        console.log("oke")
          this.currentTemperature = Math.round(response.data.main.temp - 273.15); 
          this.minTemp=Math.round(response.data.main.temp_min - 273.15); 
            this.maxTemp=Math.round(response.data.main.temp_max - 273.15); 
         console.log(response.data);
         this.weatherData= response.data;
         this.humidity= response.data.main.humidity;
         this.pressure= Math.round(response.data.main.pressure * 0.029529987);
         this.wind=response.data.wind.speed;

         console.log(this.cityName);
      } catch (error) {
        console.log(error);
        this.weatherData= null;
      }
    },
  },
  mounted(){
   this.getWeatherData();
  }
}

</script>


<style scoped></style>