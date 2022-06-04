import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel';
import VueAnalytics from 'vue-analytics'

import VueMq from 'vue-mq';
import {VueMasonryPlugin} from 'vue-masonry';
import Gallery from "./components/GalleryPage";
import About from "./components/AboutPage";
import Games from "./components/GamesPage";
import Articles from "./components/ArticlesPage";
import Resume from "./components/ResumePage";

Vue.config.productionTip = false;

Vue.use(VueMasonryPlugin);

Vue.use(VueRouter);

Vue.use(VueCarousel);

Vue.use(VueAnalytics, {
  id: 'G-EN78TKYG60'
});

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

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
