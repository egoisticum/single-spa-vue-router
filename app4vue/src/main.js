import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
var routes = require('./router/routes').routes;
import '../node_modules/klink-visualization-vue/dist/bundled.css';


//Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history',
    base: __dirname
});

// // Export router globally
window.router = router;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
