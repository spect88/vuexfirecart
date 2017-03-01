<template>
  <div>
    <span v-if="cartItems.length === 0">The cart is currently empty</span>
    <table v-else>
      <tr>
        <th class="name">Product</th>
        <th class="price">Price</th>
        <th class="quantity">Quantity</th>
        <th class="actions"></th>
        <th class="total">Total</th>
      </tr>
      <tr v-for="item in cartItems">
        <td class="name">{{ item.product.name }}</td>
        <td class="price">{{ item.product.price }} 円</td>
        <td class="quantity">
          <form @submit.prevent="onQuantityChange(item)">
            <input
              name="quantity"
              type="number"
              v-model="item.quantity"
              min="1"
              :max="item.product.stock">
            / {{ item.product.stock }}
            <button>Change</button>
          </form>
        </td>
        <td class="actions">
          <form @submit.prevent="onRemoveFromCart(item.productId)">
            <button>Remove</button>
          </form>
        </td>
        <td class="total">{{ item.subtotal }} 円</td>
      </tr>
      <tr class="total">
        <th colspan="4">Total</th>
        <th class="total">{{ totalPrice }} 円</th>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['allCartItems', 'allProducts']),
      cartItems() {
        return this.allCartItems.map(item => {
          const product = this.allProducts.find(p => p.id === item.productId)
          const subtotal = product.price * item.quantity
          return { ...item, product, subtotal }
        })
      },
      totalPrice() {
        return this.cartItems.reduce((sum, item) => sum + item.subtotal, 0)
      }
    },
    methods: {
      onQuantityChange(item) {
        this.$store.commit('changeQuantity', {
          productId: item.productId,
          quantity: item.quantity
        })
      },
      onRemoveFromCart(productId) {
        this.$store.commit('removeFromCart', { productId })
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

  tr.total th {
    border-top: 1px solid #ccc;
    border-bottom: none;
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
  .quantity,
  .total {
    text-align: right;
  }

  .actions {
    padding-left: 24px;
  }
</style>
