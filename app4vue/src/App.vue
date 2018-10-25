<template>
<div id="app4">
  <br>
  <br>
  <br>
  <p>content goes here</p>
  <router-link :to="{ name: 'test'}">test</router-link>
  <br>
  <router-link :to="{ name: 'test2'}">test2</router-link>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style></style>
