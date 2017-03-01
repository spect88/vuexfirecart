import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const isProduction = process.env.NODE_ENV === 'production'

export default new Vuex.Store({
  actions: {},
  getters: {},
  modules: {},
  strict: !isProduction
})