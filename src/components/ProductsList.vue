<template>
  <table>
    <tr>
      <th class="name">Product</th>
      <th class="price">Price</th>
      <th class="stock">Stock</th>
      <th class="actions"></th>
    </tr>
    <tr v-for="product in products">
      <td class="name">{{ product.name }}</td>
      <td class="price">{{ product.price }} 円</td>
      <td class="stock">
        <span v-if="product.stock > 0">
          {{ product.stock }}
          <span v-if="product.itemsLeft < product.stock">
            ({{ product.inCart }} in cart)
          </span>
        </span>
        <span v-else>Out of stock</span>
      </td>
      <td class="actions">
        <div v-if="product.itemsLeft > 0">
          <form @submit.prevent="onAddToCart">
            <input type="hidden" name="productId" :value="product.id">
            <label>
              Quantity:
              <input
                name="quantity"
                type="number"
                value="1"
                min="1"
                :max="product.itemsLeft">
            </label>
            <button>Add to cart</button>
          </form>
        </div>
        <span v-else>-</span>
      </td>
    </tr>
  </table>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['allCartItems', 'allProducts']),
      products() {
        return this.allProducts
          .map(item => {
            const itemInCart =
              this.allCartItems.find(({ productId }) => productId === item.id)
            const inCart = itemInCart ? itemInCart.quantity : 0
            return { ...item, inCart, itemsLeft: item.stock - inCart }
          })
      }
    },
    methods: {
      onAddToCart(event) {
        const formData = new FormData(event.currentTarget)
        const productId = Number(formData.get('productId'))
        const quantity = Number(formData.get('quantity'))
        if (quantity < 1) return
        this.$store.dispatch('addToCart', { productId, quantity })
      }
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    margin: 50px 0;
    border-spacing: 0px;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 6px;
  }

  th {
    border-bottom: 1px solid #ccc;
  }

  tr:nth-child(even) td {
    background: #efefef;
  }
  tr:nth-child(odd) td {
    background: #ddd;
  }

  .name {
    text-align: left;
  }

  .price,
  .stock {
    text-align: right;
  }

  .actions {
    padding-left: 24px;
  }
</style>
