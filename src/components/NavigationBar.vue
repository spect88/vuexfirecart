<template>
  <nav>
    <router-link to="/" exact>Products</router-link>
    <router-link to="/cart">Cart</router-link>
  </nav>
</template>

<script>
  export default {}
</script>

<style scoped>
  nav {
    text-align: center;
  }

  a {
    color: #666;
    font-weight: bold;
    font-size: 1.3em;
    text-decoration: none;
    display: inline-block;
    margin-right: 30px;
  }

  a.router-link-active {
    color: #999;
    text-decoration: underline;
  }
</style>
