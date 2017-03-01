<template>
  <div id="app">
    <h1>Vue + Vuex + Firebase shopping cart</h1>
    <navigation-bar></navigation-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavigationBar from './NavigationBar'

  export default {
    components: {
      NavigationBar
    }
  }
</script>

<style>
  body {
    background: #fff;
    font-size: 12pt;
  }

  #app {
    margin: 10px auto;
    width: 960px;
    border-radius: 10px;
  }

  h1 {
    font-family: sans-serif;
    font-size: 2.5em;
    text-align: center;
  }
</style>
