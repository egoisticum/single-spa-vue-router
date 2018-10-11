import * as singleSpa from 'single-spa';

import 'babel-polyfill';

singleSpa.registerApplication('navBar', () => import ('./src/navBar/navBar.app.js').then(mod => mod.navBar), () => true);
singleSpa.registerApplication('home', () => import('./src/home/home.app.js'), () => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'));
singleSpa.registerApplication('angularJS', () => import ('./src/angularJS/angularJS.app.js'), pathPrefix('/angularJS'));
singleSpa.registerApplication('vueJS', () => import ('./src/vue/spa/src/main.js'),  pathPrefix('/vue'));

singleSpa.start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}

