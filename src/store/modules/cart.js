import Vue from 'vue'
import VuexFire from 'vuexfire'
import { cartItemsRef, unscopeKey } from 'firebase-setup'

export default {
  state: {
    items: []
  },

  getters: {
    allCartItems: state => state.items,

    quantityInCart: (state, getters) => (productId) => {
      const item = state.items.find(i => i.id === productId)
      return item ? item.quantity : 0
    }
  },

  mutations: VuexFire.moduleMutations('cart'),

  actions: {
    addToCart({ state }, { productId, quantity }) {
      let item = state.items.find(i => i.productId === productId)
      if (!item) {
        item = { productId, quantity: quantity }
        cartItemsRef.push(item)
      } else {
        cartItemsRef.child(item['.key']).update({
          quantity: item.quantity + quantity
        })
      }
    },

    changeQuantity({ state }, { productId, quantity }) {
      let item = state.items.find(i => i.productId === productId)
      cartItemsRef.child(item['.key']).update({
        quantity: quantity
      })
    },

    removeFromCart({ state }, { productId }) {
      const item = state.items.find(i => i.productId === productId)
      if (!item) return
      cartItemsRef.child(item['.key']).remove()
    }
  }
}
