import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'
import VueRouter from 'vue-router';
var routes = require('./router/routes').routes;

// Router thingy start
Vue.use(VueRouter);
const router = new VueRouter({
    base: __dirname,
    mode: 'abstract',
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
        render: h => h(App),
        components: { App }
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

export default function register() {
    function inheritRoute() {
        let newRoute = window.location.hash.replace(/^#\/(app4\/?|)/, ''); // in the future get the prefix programatically
        if (newRoute === '') newRoute = '/';
        console.log('newroute is ', newRoute);
        Vue.$router.push(newRoute);
    }

    inheritRoute();
    window.onhashchange = (e) => {
        console.log('Updating router from hashchange with e ', e, 'and hash ', window.location.hash);
        inheritRoute();
    };
}
