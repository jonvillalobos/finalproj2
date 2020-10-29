import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js"
import "./assets/style.scss";

Vue.component('NavBar', require('./components/NavBar.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
