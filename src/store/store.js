import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    showHourly: true,
  },
  mutations: {
    switchToHourly(state) {
      state.showHourly = true;
    },
    switchTo10Days(state) {
      state.showHourly = false;
    },
  },
});
