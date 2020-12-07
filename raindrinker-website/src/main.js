import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel';
import VueAnalytics from 'vue-analytics'

import {VueMasonryPlugin} from 'vue-masonry';
import Gallery from "./components/Gallery";
import About from "./components/About";
import Games from "./components/Games";
import Articles from "./components/Articles";
import Resume from "./components/Resume";

Vue.config.productionTip = false;

Vue.use(VueMasonryPlugin);

Vue.use(VueRouter);

Vue.use(VueCarousel);

Vue.use(VueAnalytics, {
  id: 'G-EN78TKYG60'
});

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/about', name: 'About', component: About },
    { path: '/resume', name: 'Resume', component: Resume },
    { path: '/games', name: 'Games', component: Games },
    { path: '/art', name: 'Art', component: Gallery },
    { path: '/articles', name: 'Articles', component: Articles },
    { path: '*', redirect: '/about' },

  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
