<template>
  <div id="app">
    <Nav :menu-list-item="menuListItems" :user="user"></Nav>
    <header class="bg-white flex justify-between">
      <a class="inline-flex items-center ml-10" href="/">
        <img alt="Velocity" src="./assets/logo.png" height="24" width="22">
        <span class="ml-3">Velocity</span>
      </a>
      <div class="flex">
      </div>
    </header>
    <main>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </main>
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
          id: 0,
          icon: "#c-icon-dashboard",
          title: "Overview",
          isActive: "true"
        },
        {
          id: 1,
          icon: "#c-icon-analytics",
          title: "Analitycs"
        },
        {
          id: 2,
          icon: "#c-icon-vehicles",
          title: "Vehicles"
        },
        {
          id: 3,
          icon: "#c-icon-service",
          title: "Service"
        },
        {
          id: 4,
          icon: "#c-icon-map",
          title: "Map"
        },
        {
          id: 5,
          icon: "#c-icon-chat",
          title: "Chat"
        },
        {
          id: 6,
          icon: "#c-icon-settings",
          title: "Settings"
        }
      ],
      user: {
        img: {
          src: require('./assets/img/avatar.png'),
          alt: 'avatar'
        },
        firstName: "Anna",
        lastName: "Black",
        professionnalFunction: "Sr. Customer Manager"
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
  background-color: #F4F6FC;
  grid-template-columns: auto 1fr;
  grid-template-rows: 80px 1fr ;
  grid-template-areas: "nav head"
                        "nav main";
}
  header {
    grid-area: head;
  }
  main {
    grid-area: main;
  }
</style>
