import VuexFire from 'vuexfire'

export default {
  state: {
    // example: { id: 1, name: 'Apple', price: 100, stock: 10 }
    items: []
  },
  getters: {
    allProducts: state => state.items
  },
  mutations: VuexFire.moduleMutations('products'),
  actions: {}
}
