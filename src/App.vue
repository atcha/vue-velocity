<template>
  <div id="app">
    <Nav menu-list-item="menuListItems" user="user"></Nav>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Nav
  },
  data () {
    return {
      menuListItems: [
        {
          icon: "",
          title: "Overview"
        }
      ],
      user: {
        avatar: "",
        firstName: "Joan",
        lastName: "Wilkins"
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  height: 100vh;
  grid-template-columns: auto 1fr;
  grid-template-rows: 80px 1fr ;
  grid-template-areas: "nav head"
                        "nav main";
}
</style>
