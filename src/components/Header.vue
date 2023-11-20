<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div>
  <header
    class="d-flex flex-wrap justify-content-center justify-content-sm-between py-3"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 text-dark text-decoration-none"
    >
      <img src="../assets/images/logo-header.png" alt="logo" />
    </a>
    <div class="my-3 my-sm-0 mx-sm-4 search-container">
      <form class="d-flex frmSearch" @submit.prevent="updateCityName">
        
        <input 
          class="form-control me-2 search-auto ui-autocomplete-input"
          type="text" v-model="cityName"
          placeholder="Hà Nội, Hồ Chí Minh, Đà Nẵng,...."
          autocomplete="on"
          
          id="searchInput"
        />
        <button class="btn btn-outline-success" type="submit" @click="updateCityName">Tìm kiếm</button>
      </form>
    </div>
    <div class="my-3 sticky-top">
      <nav class="navbar-dark bg-weather-primary menu-location">
        <div class="nav-scroller">
          <ul class="nav w-100 nav-pills nav-fill">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Hiện tại</router-link>
            </li>
            
            <li class="nav-item">
              <router-link to="/Threedays" class="nav-link">
                3 ngày tới
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/FiveDays" class="nav-link">
                5 ngày tới
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/SevenDays" class="nav-link">
                7 ngày tới
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/TenDays" class="nav-link">
                10 ngày tới
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/FifteenDays" class="nav-link">
                15 ngày tới
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  </div>
</template>

<script>
import "../assets/css/Header.css";
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      cityName: '',
    };
  },
  methods: {
    ...mapMutations(['setCityName']),
   
    updateCityName() {
      // Gọi mutation để cập nhật cityName trong Vuex
      this.setCityName(this.cityName);
      //  console.log(this.cityName);
    },
  },
};
</script>
<style scoped></style>
