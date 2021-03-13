<template>
  <div>
    <menu-bar/>
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    MenuBar
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
  margin-top: 60px;
}
</style>
