import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
//解决300ms延迟问题
import  fastclick from 'fastclick'
fastclick.attach(document.body)

//导入axios
import axios from 'axios'
Vue.prototype.axios = axios

import 'common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h => h(App),
})
