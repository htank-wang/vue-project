import Vue from 'vue'
import Router from 'vue-router'
import OrderDetail from '@/modules/order/OrderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'OrderDetail',
      component: OrderDetail
    }
  ]
})
