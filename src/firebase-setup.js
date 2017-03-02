import Vue from 'vue'
import VuexFire from 'vuexfire'
import firebase from 'firebase'

Vue.use(VuexFire)

const config = {
  apiKey: 'AIzaSyBOYRquWYSA6SCF0QPUYI1lADl89cofxmE',
  authDomain: 'vuexfirecart-13bbc.firebaseapp.com',
  databaseURL: 'https://vuexfirecart-13bbc.firebaseio.com',
  storageBucket: 'vuexfirecart-13bbc.appspot.com',
  messagingSenderId: '211463096452'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.database()

// this should obviously be per-user in a production app ;)
export const cartItemsRef = db.ref('cart-items')

export const productsRef = db.ref('products')

export default {
  'cart.items': cartItemsRef,
  'products.items': productsRef
}
