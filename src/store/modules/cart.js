import Vue from 'vue';

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
  mutations: {
    addToCart(state, { productId, quantity }) {
      let item = state.items.find(i => i.productId === productId)
      if (!item) {
        item = { productId, quantity: 0 }
        state.items.push(item)
      }
      Vue.set(item, 'quantity', item.quantity + quantity)
    },
    changeQuantity(state, { productId, quantity }) {
      let item = state.items.find(i => i.productId === productId)
      Vue.set(item, 'quantity', quantity)
    },
    removeFromCart(state, { productId }) {
      let index = state.items.findIndex(i => i.productId === productId)
      state.items.splice(index, 1)
    }
  },
  actions: {}
}
