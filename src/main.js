import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import router from './router'
//解决300ms延迟问题
import  fastclick from 'fastclick'
fastclick.attach(document.body)

import 'common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render:h => h(App),
})
