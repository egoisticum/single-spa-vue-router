import * as singleSpa from 'single-spa';

import 'babel-polyfill';

singleSpa.registerApplication('navBar', () => import ('./src/navBar/navBar.app.js').then(mod => mod.navBar), () => true);
singleSpa.registerApplication('home', () => import('./src/home/home.app.js'), () => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'));
singleSpa.registerApplication('angularJS', () => import ('./src/angularJS/angularJS.app.js'), pathPrefix('/angularJS'));
// singleSpa.registerApplication('vueJS', () => import ('./src/vue/spa/src/main.js'),  pathPrefix('/vue'));
singleSpa.declareChildApplication('vueJS', () => import ('http://localhost:4200/'),  pathPrefix('/vue'));


// singleSpa.registerApplication('vueJS', () => loadApp('http://localhost:4200/dist/app.js'), () => true)

singleSpa.start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}

function loadApp(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script)
    });
  }
