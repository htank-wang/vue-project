// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/order'

/* eslint-disable no-new */
if (process.env.NODE_ENV === 'mock') {
  console.log('mock环境已开启')
  require('../../../mockjs')
}
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
