import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductsList from 'components/ProductsList'
import Cart from 'components/Cart'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: ProductsList },
    { path: '/cart', component: Cart },
    { path: '*', redirect: '/' }
  ]
})
