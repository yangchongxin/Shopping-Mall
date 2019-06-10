/* eslint-disable import/first,import/no-duplicates */
import Vue from 'vue';
import App from './App';
import router from './router';
import http from './http';
import notice from './components/public/el-notice';
import { Tab, Tabs } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(notice);
Vue.use(http);
Vue.use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem);
/*  eslint-disable  */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
