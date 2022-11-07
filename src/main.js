import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./assets/style/app.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  vuetify,
  BootstrapVue,
  IconsPlugin,
  render: (h) => h(App),
}).$mount("#app");
