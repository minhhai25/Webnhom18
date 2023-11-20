import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);


// store.js
export default new Vuex.Store({
  
  state: {
    cityName: '',
    // ... (các trạng thái khác nếu cần)
  },
  
  mutations: {
    setCityName(state, cityName) {
      state.cityName = cityName;
      
    },
    // ... (các mutations khác nếu cần)
  },
});
