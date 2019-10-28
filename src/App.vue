<template>
  <div id="app">
    <Nav :menu-list-item="menuListItems" :user="user"></Nav>
    <header class="bg-white flex justify-between">
      <a class="inline-flex items-center ml-10" to="/">
        <img alt="Velocity" src="./assets/logo.png" height="24" width="22">
        <span class="ml-3">Velocity</span>
      </a>
      <div class="flex items-center">
        <Button @click="openSideBar = !openSideBar" round >
          <svg xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               height="24"
               width="24" class="fill-current">
            <use xlink:href="#c-icon-chat"></use>
          </svg>
        </Button>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Button from "./components/Button"

  export default {
    name: 'app',
    components: {
      Nav,
      Button
    },
    data () {
      return {
        menuListItems: [
          {
            id: 0,
            icon: "#c-icon-dashboard",
            title: "Overview",
            isActive: "true",
            url: "/dashboard"
          },
          {
            id: 1,
            icon: "#c-icon-analytics",
            title: "Analitycs",
            url: "/analytics"
          },
          {
            id: 2,
            icon: "#c-icon-vehicles",
            title: "Vehicles",
            url: "/vehicles"
          },
          {
            id: 3,
            icon: "#c-icon-service",
            title: "Service",
            url: "/services"
          },
          {
            id: 4,
            icon: "#c-icon-map",
            title: "Map",
            url: "/map"
          },
          {
            id: 5,
            icon: "#c-icon-chat",
            title: "Chat",
            url: "/chat"
          },
          {
            id: 6,
            icon: "#c-icon-settings",
            title: "Settings",
            url: "/settings"
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
        },
        openSideBar: false
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
    display: flex;
  }
</style>
