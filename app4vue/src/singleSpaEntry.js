import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

import VueRouter from 'vue-router';
var routes = require('./router/routes').routes;

// Router thingy start
Vue.use(VueRouter);
const router = new VueRouter({
    base: "/#/app4/",
    mode: 'history',
    routes,
});

window.router = router;
// Router thingy end

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#app4',
        router,
        render: h => h(App)
    }
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export function mount(props) {
    console.log(props);
    createDomElement();
    return vueLifecycles.mount(props);
}

export const unmount = [
    vueLifecycles.unmount,
];

function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app4');

    if (!el) {
        el = document.createElement('div');
        el.id = 'app4';
        document.body.appendChild(el);
    }
    return el;
}

//Components importing
import Root from './pages/Root.vue'
import Test from './pages/Test.vue'
import Test2 from './pages/Test2.vue'