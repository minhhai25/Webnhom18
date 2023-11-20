<template>
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
      <form class="d-flex frmSearch">
        <input type="hidden" id="searchValue" name="search" />
        <input
          class="form-control me-2 search-auto ui-autocomplete-input"
          type="search"
          placeholder="Hà Nội, Hồ Chí Minh, Đà Nẵng,...."
          autocomplete="off"
          aria-label="Search"
          id="searchInput"
        />
        <button class="btn btn-outline-success" type="submit">Tìm kiếm</button>
      </form>
    </div>
    <div class="my-3 sticky-top">
      <nav class="navbar-dark bg-weather-primary menu-location">
        <div class="nav-scroller">
          <ul class="nav w-100 nav-pills nav-fill">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Hiện tại</router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/ha-noi/theo-gio">
                Theo giờ
              </a>
            </li> -->
            <!-- <li class="nav-item">
              <a class="nav-link" href="/ha-noi/ngay-mai"> Ngày mai </a>
            </li> -->
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
            <!-- <li class="nav-item">
              <a class="nav-link" href="/ha-noi/30-ngay-toi"> 30 ngày tới </a>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import "../assets/css/Header.css";
export default {
  name,
};
</script>
<style scoped></style>
