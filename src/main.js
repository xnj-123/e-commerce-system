import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)

import Carousel from '@/components/Carousel'
Vue.component('Carousel',Carousel)

import Pagination from '@/components/Pagination'
Vue.component('Pagination',Pagination)


import { Button, Loading, Select } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

import '@/mock/mockServe'

import store from '@/store'

import 'swiper/css/swiper.css'

import * as API from '@/api'

Vue.config.productionTip = false

import {  MessageBox} from 'element-ui'
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import VeeValidate from '@/plugins/veevalidate'
import VueLazyLoad from 'vue-lazyload'

import OIP from '@/assets/images/OIP-C.jpg'

Vue.use(VueLazyLoad,{
  loading:OIP
});

new Vue({
  render: h => h(App),
  router,
  store,

  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
  
}).$mount('#app')
