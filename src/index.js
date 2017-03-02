import Vue from 'vue'
import VuexFire from 'vuexfire'
import { sync } from 'vuex-router-sync'

import router from './router'
import store from './store'
import App from './components/App'
import firebase from './firebase-setup'

// extend vuex store with route module
sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  firebase
})
