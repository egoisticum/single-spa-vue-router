<template>
  <div id="app">
    <router-link :to="'/vue'"><img src="./assets/logo.png"></router-link>
    <router-link :to="'/vue'">Home</router-link>
    <router-link :to="'/vue/about'">About</router-link>
    <router-link :to="'/vue/devices'">Devices</router-link>
    <router-link :to="'/vue/assets'">Assets</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
    @import "./assets/custom.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
img{
    display: block;
    margin: 0 auto;
  }
</style>
