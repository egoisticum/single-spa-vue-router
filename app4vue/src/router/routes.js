// Views
// Devices
const Devices = resolve => { require.ensure(['../pages/devices/Devices.vue'], () => { resolve(require('../pages/devices/Devices.vue')); }); };
const DevicesMain = resolve => { require.ensure(['../pages/devices/DevicesMain.vue'], () => { resolve(require('../pages/devices/DevicesMain.vue')); }); };
const Device = resolve => { require.ensure(['../pages/devices/Device.vue'], () => { resolve(require('../pages/devices/Device.vue')); }); };
const DeviceCreate = resolve => { require.ensure(['../pages/devices/DeviceCreate.vue'], () => { resolve(require('../pages/devices/DeviceCreate.vue')); }); };
const DeviceEdit = resolve => { require.ensure(['../pages/devices/DeviceEdit.vue'], () => { resolve(require('../pages/devices/DeviceEdit.vue')); }); };
const DeviceSensor = resolve => { require.ensure(['../pages/devices/DeviceSensor.vue'], () => { resolve(require('../pages/devices/DeviceSensor.vue')); }); };

// Assets
const Assets = resolve => { require.ensure(['../pages/assets/Assets.vue'], () => { resolve(require('../pages/assets/Assets.vue')); }); };
const AssetsMain = resolve => { require.ensure(['../pages/assets/AssetsMain.vue'], () => { resolve(require('../pages/assets/AssetsMain.vue')); }); };
const Asset = resolve => { require.ensure(['../pages/assets/Asset.vue'], () => { resolve(require('../pages/assets/Asset.vue')); }); };
const AssetCreate = resolve => { require.ensure(['../pages/assets/AssetCreate.vue'], () => { resolve(require('../pages/assets/AssetCreate.vue')); }); };
const AssetEdit = resolve => { require.ensure(['../pages/assets/AssetEdit.vue'], () => { resolve(require('../pages/assets/AssetEdit.vue')); }); };
const AssetLinkDevice = resolve => { require.ensure(['../pages/assets/AssetLinkDevice.vue'], () => { resolve(require('../pages/assets/AssetLinkDevice.vue')); }); };


export const routes = [
    {
        path: '/devices',
        name: 'devices',
        component: Devices,
        children: [
            {
                path: '/devices',
                component: DevicesMain,
                children: [
                    {
                        path: '/devices/create',
                        name: 'klink-add-devices',
                        component: DeviceCreate,
                        props: true
                    },
                    {
                        path: '/devices/edit/:id',
                        name: 'klink-edit-devices',
                        component: DeviceEdit,
                        props: true
                    },
                    {
                        path: '/devices/sensor/:id',
                        name: 'klink-sensor-devices',
                        component: DeviceSensor,
                        props: true
                    }
                ]
            },
            {
                path: '/devices/:id',
                name: 'device',
                component: Device
            }
        ]
    },
    {
        path: '/assets',
        name: 'assets',
        component: Assets,
        children: [
            {
                path: '/assets',
                component: AssetsMain,
                children: [
                    {
                        path: '/assets/create',
                        name: 'klink-add-assets',
                        component: AssetCreate,
                        props: true
                    },
                    {
                        path: '/assets/edit/:id',
                        name: 'klink-edit-assets',
                        component: AssetEdit,
                        props: true
                    },
                    {
                        path: '/assets/link/:id',
                        name: 'klink-link-device-assets',
                        component: AssetLinkDevice,
                        props: true
                    }
                ]
            }
        ]
    }
    // 404 redirect to home
    // { path: '*', redirect: { name: 'Page404', component: Page404 }  }
];
