// import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";

import Vue from "vue";
import Vuetify from "vuetify";
//import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Vuetify, {
  iconfont: "mdi"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
