import Vue from 'vue'
import Router from 'vue-router'
import IndexDetail from '@/modules/index/IndexDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'IndexDetail',
      component: IndexDetail
    }
  ]
})
