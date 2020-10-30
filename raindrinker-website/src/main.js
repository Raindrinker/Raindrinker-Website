import Vue from 'vue'
import App from './App.vue'

import {VueMasonryPlugin} from 'vue-masonry';

Vue.config.productionTip = false;

Vue.use(VueMasonryPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
