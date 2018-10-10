// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
// var App = require('./App.vue');
import App from './App.vue'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
//import the hello component
// var Hello = require('./components/HelloWorld')
// var About = require('./components/About')

import Hello from './components/HelloWorld.vue'
import About from './components/About.vue'

//define your routes
const routes = [
//define the root url of the application.
{ path: '/', component: Hello },
//route for the about route of the web page
{ path: '/about', component: About }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
// new Vue({
// //define the selector for the root component
//   el: '#app',
//   //pass the template to the root component
//   template: '<App/>',
//   //declare components that the root component can access
//   components: { App },
//   render: h => h(App),
//   //pass in the router to the Vue instance
//   router
// }).$mount('#app')//mount the router on the app

window.onload = function () {
  var main = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      render: h => h(App),
      router

  });
}
