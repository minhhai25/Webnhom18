<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h1 class="card-title font-size-18">
          <a href="/ha-noi/7-ngay-toi"> Thời tiết Hà Nội 7 ngày tới </a>
        </h1>
        <div class="cover-content-bottom" id="hourly-item">
          <details class="weather-day text-dark">
            <summary
              class="weather-summary text-dark"
              data-toggle="collapse"
              data-target="#detail-20-11-12-00"
              aria-expanded="false"
              aria-controls="detail-20-11-12-00"
            >
              <div class="weather-summary-content text-dark">
                <div class="weather-summary-title text-dark">
                  <h2 class="summary-day text-dark font-h2">
                    <span class="font-bold">Hiện tại</span>
                  </h2>
                  <div class="summary-temperature text-dark">
                    <span class="summary-temperature-min"> 15° </span>
                    <span class="summary-temperature-max">
                      /
                      <span class="summary-temperature-max-value"> 24° </span>
                    </span>
                  </div>
                  <div class="summary-description text-dark d-flex">
                    <img
                      src="https://file.thoitiet.edu.vn/thoitietedu/icons/02d.png"
                      alt="Mây thưa"
                      class="summary-img"
                    />
                    <span
                      class="summary-description-detail align-self-center ms-2"
                    >
                      Mây thưa
                    </span>
                  </div>
                  <div
                    class="summary-humidity text-dark d-none d-sm-block"
                    title="Độ ẩm"
                  >
                    <span class="summary-icon">
                      <i class="bi bi-droplet"></i>
                    </span>
                    <span> 54 % </span>
                  </div>
                  <div class="summary-speed text-dark d-none d-sm-block">
                    <span class="summary-icon">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="wind"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Wind</title>
                        <path
                          d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
                          stroke-width="2"
                          stroke="currentColor"
                          stroke-linecap="round"
                          fill="none"
                        ></path>
                      </svg>
                    </span>
                    <span> 9.22 km/h </span>
                  </div>
                </div>
                <span class="weather-summary-toggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </div>
            </summary>
            <div class="weather-content text-dark" id="detail-20-11-12-00">
              <div
                class="d-flex flex-wrap justify-content-between weather-detail weather-detail-cac-ngay weather-detail-white mt-2"
              >
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <i class="bi bi-cloud-rain"></i>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Mưa</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span class="op-8 fw-bold">
                        <span>0 mm</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="pressure"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Áp suất</title>
                        <path
                          d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Áp suất</h6>
                    <span> 764.31 mmhg </span>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-cloud-fog2"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Độ ẩm</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span> 54 % </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-wind"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Gió</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">9.22 km/h</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun">
                  <div class="avatar">
                    <span class="weather-icon">
                      <i class="bi bi-sun"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Mặt trời mọc/lặn</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">
                        <span><i class="bi bi-sunrise"></i>06:09</span>
                        <span>
                          <i class="bi bi-sunset"></i>
                          17:14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
          <details class="weather-day text-dark">
            <summary
              class="weather-summary text-dark"
              data-toggle="collapse"
              data-target="#detail-20-11-12-00"
              aria-expanded="false"
              aria-controls="detail-20-11-12-00"
            >
              <div class="weather-summary-content text-dark">
                <div class="weather-summary-title text-dark">
                  <h2 class="summary-day text-dark font-h2">
                    <span class="font-bold">Hiện tại</span>
                  </h2>
                  <div class="summary-temperature text-dark">
                    <span class="summary-temperature-min"> 15° </span>
                    <span class="summary-temperature-max">
                      /
                      <span class="summary-temperature-max-value"> 24° </span>
                    </span>
                  </div>
                  <div class="summary-description text-dark d-flex">
                    <img
                      src="https://file.thoitiet.edu.vn/thoitietedu/icons/02d.png"
                      alt="Mây thưa"
                      class="summary-img"
                    />
                    <span
                      class="summary-description-detail align-self-center ms-2"
                    >
                      Mây thưa
                    </span>
                  </div>
                  <div
                    class="summary-humidity text-dark d-none d-sm-block"
                    title="Độ ẩm"
                  >
                    <span class="summary-icon">
                      <i class="bi bi-droplet"></i>
                    </span>
                    <span> 54 % </span>
                  </div>
                  <div class="summary-speed text-dark d-none d-sm-block">
                    <span class="summary-icon">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="wind"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Wind</title>
                        <path
                          d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
                          stroke-width="2"
                          stroke="currentColor"
                          stroke-linecap="round"
                          fill="none"
                        ></path>
                      </svg>
                    </span>
                    <span> 9.22 km/h </span>
                  </div>
                </div>
                <span class="weather-summary-toggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </div>
            </summary>
            <div class="weather-content text-dark" id="detail-20-11-12-00">
              <div
                class="d-flex flex-wrap justify-content-between weather-detail weather-detail-cac-ngay weather-detail-white mt-2"
              >
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <i class="bi bi-cloud-rain"></i>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Mưa</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span class="op-8 fw-bold">
                        <span>0 mm</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="pressure"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Áp suất</title>
                        <path
                          d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Áp suất</h6>
                    <span> 764.31 mmhg </span>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-cloud-fog2"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Độ ẩm</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span> 54 % </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-wind"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Gió</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">9.22 km/h</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun">
                  <div class="avatar">
                    <span class="weather-icon">
                      <i class="bi bi-sun"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Mặt trời mọc/lặn</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">
                        <span><i class="bi bi-sunrise"></i>06:09</span>
                        <span>
                          <i class="bi bi-sunset"></i>
                          17:14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
          <details class="weather-day text-dark">
            <summary
              class="weather-summary text-dark"
              data-toggle="collapse"
              data-target="#detail-20-11-12-00"
              aria-expanded="false"
              aria-controls="detail-20-11-12-00"
            >
              <div class="weather-summary-content text-dark">
                <div class="weather-summary-title text-dark">
                  <h2 class="summary-day text-dark font-h2">
                    <span class="font-bold">Hiện tại</span>
                  </h2>
                  <div class="summary-temperature text-dark">
                    <span class="summary-temperature-min"> 15° </span>
                    <span class="summary-temperature-max">
                      /
                      <span class="summary-temperature-max-value"> 24° </span>
                    </span>
                  </div>
                  <div class="summary-description text-dark d-flex">
                    <img
                      src="https://file.thoitiet.edu.vn/thoitietedu/icons/02d.png"
                      alt="Mây thưa"
                      class="summary-img"
                    />
                    <span
                      class="summary-description-detail align-self-center ms-2"
                    >
                      Mây thưa
                    </span>
                  </div>
                  <div
                    class="summary-humidity text-dark d-none d-sm-block"
                    title="Độ ẩm"
                  >
                    <span class="summary-icon">
                      <i class="bi bi-droplet"></i>
                    </span>
                    <span> 54 % </span>
                  </div>
                  <div class="summary-speed text-dark d-none d-sm-block">
                    <span class="summary-icon">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="wind"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Wind</title>
                        <path
                          d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
                          stroke-width="2"
                          stroke="currentColor"
                          stroke-linecap="round"
                          fill="none"
                        ></path>
                      </svg>
                    </span>
                    <span> 9.22 km/h </span>
                  </div>
                </div>
                <span class="weather-summary-toggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </div>
            </summary>
            <div class="weather-content text-dark" id="detail-20-11-12-00">
              <div
                class="d-flex flex-wrap justify-content-between weather-detail weather-detail-cac-ngay weather-detail-white mt-2"
              >
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <i class="bi bi-cloud-rain"></i>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Mưa</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span class="op-8 fw-bold">
                        <span>0 mm</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="pressure"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Áp suất</title>
                        <path
                          d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Áp suất</h6>
                    <span> 764.31 mmhg </span>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-cloud-fog2"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Độ ẩm</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span> 54 % </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-wind"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Gió</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">9.22 km/h</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun">
                  <div class="avatar">
                    <span class="weather-icon">
                      <i class="bi bi-sun"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Mặt trời mọc/lặn</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">
                        <span><i class="bi bi-sunrise"></i>06:09</span>
                        <span>
                          <i class="bi bi-sunset"></i>
                          17:14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
          <details class="weather-day text-dark">
            <summary
              class="weather-summary text-dark"
              data-toggle="collapse"
              data-target="#detail-20-11-12-00"
              aria-expanded="false"
              aria-controls="detail-20-11-12-00"
            >
              <div class="weather-summary-content text-dark">
                <div class="weather-summary-title text-dark">
                  <h2 class="summary-day text-dark font-h2">
                    <span class="font-bold">Hiện tại</span>
                  </h2>
                  <div class="summary-temperature text-dark">
                    <span class="summary-temperature-min"> 15° </span>
                    <span class="summary-temperature-max">
                      /
                      <span class="summary-temperature-max-value"> 24° </span>
                    </span>
                  </div>
                  <div class="summary-description text-dark d-flex">
                    <img
                      src="https://file.thoitiet.edu.vn/thoitietedu/icons/02d.png"
                      alt="Mây thưa"
                      class="summary-img"
                    />
                    <span
                      class="summary-description-detail align-self-center ms-2"
                    >
                      Mây thưa
                    </span>
                  </div>
                  <div
                    class="summary-humidity text-dark d-none d-sm-block"
                    title="Độ ẩm"
                  >
                    <span class="summary-icon">
                      <i class="bi bi-droplet"></i>
                    </span>
                    <span> 54 % </span>
                  </div>
                  <div class="summary-speed text-dark d-none d-sm-block">
                    <span class="summary-icon">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="wind"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Wind</title>
                        <path
                          d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
                          stroke-width="2"
                          stroke="currentColor"
                          stroke-linecap="round"
                          fill="none"
                        ></path>
                      </svg>
                    </span>
                    <span> 9.22 km/h </span>
                  </div>
                </div>
                <span class="weather-summary-toggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </div>
            </summary>
            <div class="weather-content text-dark" id="detail-20-11-12-00">
              <div
                class="d-flex flex-wrap justify-content-between weather-detail weather-detail-cac-ngay weather-detail-white mt-2"
              >
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <i class="bi bi-cloud-rain"></i>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Mưa</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span class="op-8 fw-bold">
                        <span>0 mm</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="pressure"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Áp suất</title>
                        <path
                          d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Áp suất</h6>
                    <span> 764.31 mmhg </span>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-cloud-fog2"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Độ ẩm</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span> 54 % </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-wind"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Gió</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">9.22 km/h</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun">
                  <div class="avatar">
                    <span class="weather-icon">
                      <i class="bi bi-sun"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Mặt trời mọc/lặn</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">
                        <span><i class="bi bi-sunrise"></i>06:09</span>
                        <span>
                          <i class="bi bi-sunset"></i>
                          17:14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
          <details class="weather-day text-dark">
            <summary
              class="weather-summary text-dark"
              data-toggle="collapse"
              data-target="#detail-20-11-12-00"
              aria-expanded="false"
              aria-controls="detail-20-11-12-00"
            >
              <div class="weather-summary-content text-dark">
                <div class="weather-summary-title text-dark">
                  <h2 class="summary-day text-dark font-h2">
                    <span class="font-bold">Hiện tại</span>
                  </h2>
                  <div class="summary-temperature text-dark">
                    <span class="summary-temperature-min"> 15° </span>
                    <span class="summary-temperature-max">
                      /
                      <span class="summary-temperature-max-value"> 24° </span>
                    </span>
                  </div>
                  <div class="summary-description text-dark d-flex">
                    <img
                      src="https://file.thoitiet.edu.vn/thoitietedu/icons/02d.png"
                      alt="Mây thưa"
                      class="summary-img"
                    />
                    <span
                      class="summary-description-detail align-self-center ms-2"
                    >
                      Mây thưa
                    </span>
                  </div>
                  <div
                    class="summary-humidity text-dark d-none d-sm-block"
                    title="Độ ẩm"
                  >
                    <span class="summary-icon">
                      <i class="bi bi-droplet"></i>
                    </span>
                    <span> 54 % </span>
                  </div>
                  <div class="summary-speed text-dark d-none d-sm-block">
                    <span class="summary-icon">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="wind"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Wind</title>
                        <path
                          d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
                          stroke-width="2"
                          stroke="currentColor"
                          stroke-linecap="round"
                          fill="none"
                        ></path>
                      </svg>
                    </span>
                    <span> 9.22 km/h </span>
                  </div>
                </div>
                <span class="weather-summary-toggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </div>
            </summary>
            <div class="weather-content text-dark" id="detail-20-11-12-00">
              <div
                class="d-flex flex-wrap justify-content-between weather-detail weather-detail-cac-ngay weather-detail-white mt-2"
              >
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <i class="bi bi-cloud-rain"></i>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Mưa</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span class="op-8 fw-bold">
                        <span>0 mm</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="pressure"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Áp suất</title>
                        <path
                          d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Áp suất</h6>
                    <span> 764.31 mmhg </span>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-cloud-fog2"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Độ ẩm</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span> 54 % </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-wind"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Gió</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">9.22 km/h</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun">
                  <div class="avatar">
                    <span class="weather-icon">
                      <i class="bi bi-sun"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Mặt trời mọc/lặn</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">
                        <span><i class="bi bi-sunrise"></i>06:09</span>
                        <span>
                          <i class="bi bi-sunset"></i>
                          17:14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
          <details class="weather-day text-dark">
            <summary
              class="weather-summary text-dark"
              data-toggle="collapse"
              data-target="#detail-20-11-12-00"
              aria-expanded="false"
              aria-controls="detail-20-11-12-00"
            >
              <div class="weather-summary-content text-dark">
                <div class="weather-summary-title text-dark">
                  <h2 class="summary-day text-dark font-h2">
                    <span class="font-bold">Hiện tại</span>
                  </h2>
                  <div class="summary-temperature text-dark">
                    <span class="summary-temperature-min"> 15° </span>
                    <span class="summary-temperature-max">
                      /
                      <span class="summary-temperature-max-value"> 24° </span>
                    </span>
                  </div>
                  <div class="summary-description text-dark d-flex">
                    <img
                      src="https://file.thoitiet.edu.vn/thoitietedu/icons/02d.png"
                      alt="Mây thưa"
                      class="summary-img"
                    />
                    <span
                      class="summary-description-detail align-self-center ms-2"
                    >
                      Mây thưa
                    </span>
                  </div>
                  <div
                    class="summary-humidity text-dark d-none d-sm-block"
                    title="Độ ẩm"
                  >
                    <span class="summary-icon">
                      <i class="bi bi-droplet"></i>
                    </span>
                    <span> 54 % </span>
                  </div>
                  <div class="summary-speed text-dark d-none d-sm-block">
                    <span class="summary-icon">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="wind"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Wind</title>
                        <path
                          d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
                          stroke-width="2"
                          stroke="currentColor"
                          stroke-linecap="round"
                          fill="none"
                        ></path>
                      </svg>
                    </span>
                    <span> 9.22 km/h </span>
                  </div>
                </div>
                <span class="weather-summary-toggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </div>
            </summary>
            <div class="weather-content text-dark" id="detail-20-11-12-00">
              <div
                class="d-flex flex-wrap justify-content-between weather-detail weather-detail-cac-ngay weather-detail-white mt-2"
              >
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <i class="bi bi-cloud-rain"></i>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Mưa</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span class="op-8 fw-bold">
                        <span>0 mm</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="pressure"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Áp suất</title>
                        <path
                          d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Áp suất</h6>
                    <span> 764.31 mmhg </span>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-cloud-fog2"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Độ ẩm</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span> 54 % </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-wind"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Gió</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">9.22 km/h</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun">
                  <div class="avatar">
                    <span class="weather-icon">
                      <i class="bi bi-sun"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Mặt trời mọc/lặn</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">
                        <span><i class="bi bi-sunrise"></i>06:09</span>
                        <span>
                          <i class="bi bi-sunset"></i>
                          17:14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
          <details class="weather-day text-dark">
            <summary
              class="weather-summary text-dark"
              data-toggle="collapse"
              data-target="#detail-20-11-12-00"
              aria-expanded="false"
              aria-controls="detail-20-11-12-00"
            >
              <div class="weather-summary-content text-dark">
                <div class="weather-summary-title text-dark">
                  <h2 class="summary-day text-dark font-h2">
                    <span class="font-bold">Hiện tại</span>
                  </h2>
                  <div class="summary-temperature text-dark">
                    <span class="summary-temperature-min"> 15° </span>
                    <span class="summary-temperature-max">
                      /
                      <span class="summary-temperature-max-value"> 24° </span>
                    </span>
                  </div>
                  <div class="summary-description text-dark d-flex">
                    <img
                      src="https://file.thoitiet.edu.vn/thoitietedu/icons/02d.png"
                      alt="Mây thưa"
                      class="summary-img"
                    />
                    <span
                      class="summary-description-detail align-self-center ms-2"
                    >
                      Mây thưa
                    </span>
                  </div>
                  <div
                    class="summary-humidity text-dark d-none d-sm-block"
                    title="Độ ẩm"
                  >
                    <span class="summary-icon">
                      <i class="bi bi-droplet"></i>
                    </span>
                    <span> 54 % </span>
                  </div>
                  <div class="summary-speed text-dark d-none d-sm-block">
                    <span class="summary-icon">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="wind"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Wind</title>
                        <path
                          d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
                          stroke-width="2"
                          stroke="currentColor"
                          stroke-linecap="round"
                          fill="none"
                        ></path>
                      </svg>
                    </span>
                    <span> 9.22 km/h </span>
                  </div>
                </div>
                <span class="weather-summary-toggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </div>
            </summary>
            <div class="weather-content text-dark" id="detail-20-11-12-00">
              <div
                class="d-flex flex-wrap justify-content-between weather-detail weather-detail-cac-ngay weather-detail-white mt-2"
              >
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <i class="bi bi-cloud-rain"></i>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Mưa</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span class="op-8 fw-bold">
                        <span>0 mm</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item text-dark">
                  <div class="avatar">
                    <div class="avatar-img rounded-circle">
                      <svg
                        class="WeatherDetailsListItem--icon--NgMGn Icon--icon--2AbGu Icon--darkTheme--2U1o8"
                        set="current-conditions"
                        name="pressure"
                        theme="dark"
                        data-testid="Icon"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <title>Áp suất</title>
                        <path
                          d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 pt-1 ml-2 text-dark">
                    <h6 class="fw-bold mb-1">Áp suất</h6>
                    <span> 764.31 mmhg </span>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-cloud-fog2"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Độ ẩm</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <span> 54 % </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun text-dark">
                  <div class="avatar">
                    <span class="summary-icon">
                      <i class="bi bi-wind"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Gió</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">9.22 km/h</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex weather-content-item-sun">
                  <div class="avatar">
                    <span class="weather-icon">
                      <i class="bi bi-sun"></i>
                    </span>
                  </div>
                  <div class="flex-1 pt-1 ml-2">
                    <h6 class="fw-bold mb-1">Mặt trời mọc/lặn</h6>
                    <div class="d-flex ml-auto align-items-center">
                      <div class="weather-sun">
                        <span><i class="bi bi-sunrise"></i>06:09</span>
                        <span>
                          <i class="bi bi-sunset"></i>
                          17:14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/SevenDays.css";

export default {};
</script>

<style></style>
