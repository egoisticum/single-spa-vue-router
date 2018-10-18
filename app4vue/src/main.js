import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
var routes = require('./router/routes').routes;
// import '../node_modules/klink-visualization-vue/dist/bundled.css';

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
// window.router = router;

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
