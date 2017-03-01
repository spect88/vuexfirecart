import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

const isProduction = process.env.NODE_ENV === 'production'

export default new Vuex.Store({
  actions: {},
  getters: {},
  modules: {
    products,
    cart
  },
  strict: !isProduction
})
