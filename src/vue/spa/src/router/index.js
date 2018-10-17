// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import About from '@/components/About'
//
// // Devices
//
// import Devices from '@/components/devices/Devices'
// import DevicesMain from '@/components/devices/DevicesMain'
// import Device from '@/components/devices/Device'
// import DeviceCreate from '@/components/devices/DeviceCreate'
// import DeviceEdit from '@/components/devices/DeviceEdit'
// import DeviceSensor from '@/components/devices/DeviceSensor'
//
// // Assets
//
// import Assets from '@/components/assets/Assets';
// import AssetsMain from '@/components/assets/AssetsMain';
// import Asset from '@/components/assets/Asset';
// import AssetCreate from '@/components/assets/AssetCreate';
// import AssetEdit from '@/components/assets/AssetEdit';
// import AssetLinkDevice from '@/components/assets/AssetLinkDevice';
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/vue/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/vue/about',
//       name: 'About',
//       component: About
//     },
//     {
//       path: '/vue/devices',
//       name: 'devices',
//       component: Devices,
//       children: [
//           {
//               path: '/vue/devices',
//               component: DevicesMain,
//               children: [
//                   {
//                       path: '/vue/devices/create',
//                       name: 'klink-add-devices',
//                       component: DeviceCreate,
//                       props: true
//                   },
//                   {
//                       path: '/vue/devices/edit/:id',
//                       name: 'klink-edit-devices',
//                       component: DeviceEdit,
//                       props: true
//                   },
//                   {
//                       path: '/vue/devices/sensor/:id',
//                       name: 'klink-sensor-devices',
//                       component: DeviceSensor,
//                       props: true
//                   }
//               ]
//           },
//           {
//               path: '/vue/devices/:id',
//               name: 'device',
//               component: Device
//           }
//       ]
//   },
//   {
//     path: '/vue/assets',
//     name: 'assets',
//     component: Assets,
//     children: [
//         {
//             path: '/vue/assets',
//             component: AssetsMain,
//             children: [
//                 {
//                     path: '/vue/assets/create',
//                     name: 'klink-add-assets',
//                     component: AssetCreate,
//                     props: true
//                 },
//                 {
//                     path: '/vue/assets/edit/:id',
//                     name: 'klink-edit-assets',
//                     component: AssetEdit,
//                     props: true
//                 },
//                 {
//                     path: '/vue/assets/link/:id',
//                     name: 'klink-link-device-assets',
//                     component: AssetLinkDevice,
//                     props: true
//                 }
//             ]
//         },
//         {
//           path: '/vue/assets/:id',
//           name: 'asset',
//           component: Asset
//       }
//     ]
// },
//   ]
// })
