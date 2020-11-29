import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel';

import {VueMasonryPlugin} from 'vue-masonry';
import Gallery from "./components/Gallery";
import About from "./components/About";
import Games from "./components/Games";

Vue.config.productionTip = false;

Vue.use(VueMasonryPlugin);

Vue.use(VueRouter);

Vue.use(VueCarousel);

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/about', name: 'About', component: About },
    { path: '/games', name: 'Games', component: Games },
    { path: '/art', name: 'Art', component: Gallery },
    { path: '*', redirect: '/about' },

  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
