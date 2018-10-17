// The Vue build version to load with the `import` command

//import the vue instance
import Vue from 'vue/dist/vue.min.js'
import singleSpaVue from 'single-spa-vue';

//import the App component
import App from './App.vue'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
//import the components
import Hello from './components/HelloWorld.vue'
import About from './components/About.vue'

//testing importing files, should they all be included in main.js? ok yes, and how to call the packages/modules per component??!
import KlinkCard from 'klink-visualization-vue';
import Cta from 'klink-visualization-vue';
Vue.use(KlinkCard, Cta);
import '../node_modules/klink-visualization-vue/dist/bundled.css';

//Device routes
import Devices from './components/Devices/Devices.vue'
import DevicesMain from './components/devices/DevicesMain.vue'
import Device from './components/devices/Device.vue'
import DeviceCreate from './components/devices/DeviceCreate.vue'
import DeviceEdit from './components/devices/DeviceEdit.vue'
import DeviceSensor from './components/devices/DeviceSensor.vue'
//Asset routes
import Assets from './components/Assets/Assets.vue'
import AssetsMain from './components/Assets/AssetsMain.vue'
import Asset from './components/Assets/Asset.vue'
import AssetCreate from './components/Assets/AssetCreate.vue'
import AssetEdit from './components/Assets/AssetEdit.vue'
import AssetLinkDevice from './components/Assets/AssetLinkDevice.vue'

//Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

//define your routes
const routes = [
//define the root url of the application.
{ path: '/vue/', component: Hello },
//route for the about route of the web page
{ path: '/vue/about', component: About },
{ path: '/vue/devices', component: Devices, children: [
  {
      path: '/vue/devices',
      component: DevicesMain,
      children: [
          {
              path: '/vue/devices/create',
              name: 'klink-add-devices',
              component: DeviceCreate,
              props: true
          },
          {
              path: '/vue/devices/edit/:id',
              name: 'klink-edit-devices',
              component: DeviceEdit,
              props: true
          },
          {
              path: '/vue/devices/sensor/:id',
              name: 'klink-sensor-devices',
              component: DeviceSensor,
              props: true
          }
      ]
  },
  {
      path: '/vue/devices/:id',
      name: 'device',
      component: Device
  }
]
},
{ path: '/vue/assets', component: Assets, children: [
  {
    path: '/vue/assets',
    component: AssetsMain,
    children: [
      {
          path: '/vue/assets/create',
          name: 'klink-add-assets',
          component: AssetCreate,
          props: true
      },
      {
          path: '/vue/assets/edit/:id',
          name: 'klink-edit-assets',
          component: AssetEdit,
          props: true
      },
      {
          path: '/vue/assets/sensor/:id',
          name: 'klink-sensor-assets',
          component: AssetLinkDevice,
          props: true
      }
    ]
  },
  {
      path: '/vue/assets/:id',
      name: 'asset',
      component: Asset
  }
] }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history',
  base: __dirname,
  routes
})

// Export router globally
window.router = router;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app',
    template: '<App/>',
    components: { App },
    render: h => h(App),
    router
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
