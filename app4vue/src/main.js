import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
var routes = require('./router/routes').routes;


Vue.config.productionTip = false;

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes,
});

// Export router globally
window.router = router;

var vm = new Vue({
  el: '#app4',
  router,
  render: h => h(App),
  components: { App }
});
window.vm = vm;