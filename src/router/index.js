import Vue from "vue";
import VueRouter from "vue-router";
import Weather from "../components/Weather";
import Threedays from "../components/Threedays";
import FiveDays from "../components/FiveDays";
import SevenDays from "../components/SevenDays";
import TenDays from "../components/TenDays";
import FifteenDays from "../components/FifteenDays";

Vue.use(VueRouter);
const routes = [
  // ...
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/Threedays",
    name: "Threedays",
    component: Threedays,
  },
  {
    path: "/FiveDays",
    name: "FiveDays",
    component: FiveDays,
  },
  {
    path: "/SevenDays",
    name: "SevenDays",
    component: SevenDays,
  },
  {
    path: "/TenDays",
    name: "TenDays",
    component: TenDays,
  },
  {
    path: "/FifteenDays",
    name: "FifteenDays",
    component: FifteenDays,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
