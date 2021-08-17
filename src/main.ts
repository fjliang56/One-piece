import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";
import FFFF from "./components/FFFF.vue";
import FFF from "./components/FFF.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: FFFF },
    { path: "/xxx", component: FFF },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
