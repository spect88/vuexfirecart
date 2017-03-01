export default {
  state: {
    items: [
      { id: 1, name: 'Apple', price: 100, stock: 10 },
      { id: 2, name: 'Banana', price: 300, stock: 5 },
      { id: 3, name: 'Carrot', price: 230, stock: 7 },
      { id: 4, name: 'Dill', price: 80, stock: 0 },
      { id: 5, name: 'Eggplant', price: 160, stock: 4 }
    ]
  },
  getters: {
    allProducts: state => state.items
  },
  mutations: {},
  actions: {}
}
