window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
require('bootstrap');
require('perfect-scrollbar');
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { routes } from './routes';
import swal from 'sweetalert2'
window.swal = swal;
import App from './components/layouts/App';
//uses
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
//Vue.axios.defaults.baseURL= 'http://tapcheck.oo/api';
Vue.axios.defaults.baseURL= 'http://tapcheck.oo/api';
const router = new VueRouter({
  mode:'history',
  routes
});

Vue.router = router;
Vue.use(require('@websanova/vue-auth'),{
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x')
});

Vue.config.productionTip = false;
App.router = Vue.router;
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');
