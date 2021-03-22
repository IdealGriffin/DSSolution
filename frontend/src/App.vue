<template>
  <div>
    <MenuBar/>
    <BottomBanner/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import BottomBanner from './components/BottomBanner.vue'

export default {
  name: 'App',
  components: {
    MenuBar,
    BottomBanner
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #E4E2E2;
}
</style>
