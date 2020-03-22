<template>
  <div id="app" class="min-h-screen overflow-auto">
    <Nav class="hidden md:block" :menu-list-item="menuListItems" :user="user"></Nav>
    <header class="bg-white flex justify-between px-2 lg:px-20 border-b border-gray-3 border-solid">
      <Nav class="md:hidden" mode="mobile" :menu-list-item="menuListItems" :user="user"></Nav>
      <a class="flex items-center" to="/">
        <img alt="Velocity" src="./assets/logo.png" height="24" width="22">
        <span class="ml-3">Velocity</span>
      </a>
      <div class="flex items-center">
        <Button @click.native="openSideBar"
                class="mx-2 relative text-gray-1 hover:text-primary-normal"
                round>
          <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary-normal"></span>
          <svg xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               height="35"
               width="35"
               class="fill-current">
            <use xlink:href="#c-icon-bell"></use>
          </svg>
        </Button>
        <Button @click.native="openSideBar"
                class="mx-2 relative text-gray-1 hover:text-primary-normal"
                round>
          <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary-normal"></span>
          <svg xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               height="35"
               width="35"
               class="fill-current">
            <use xlink:href="#c-icon-chat"></use>
          </svg>
        </Button>
        <Button @click.native="openSideBar"
                class="mx-2"
                round>
          <avatar type="simple"
                  :img="user.img"
                  img-class="h-8 w-8 rounded-full">
          </avatar>
        </Button>
      </div>
    </header>
    <router-view class="min-h-full" />
    <SideBar :is-visible="isOpenSideBar"></SideBar>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Button from "./components/Button"
  import Avatar from "./components/Avatar"
  import SideBar from "./components/SideBar"

  export default {
    name: 'app',
    components: {
      Nav,
      Button,
      Avatar,
      SideBar
    },
    data () {
      return {
        menuListItems: [
          {
            id: 0,
            icon: "#c-icon-dashboard",
            title: "Overview",
            url: "/"
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
            url: "/service-reminders"
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
        isOpenSideBar: false
      }
    },
    methods: {
      openSideBar () {
        this.isOpenSideBar = !this.isOpenSideBar;
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
    background-color: #F4F6FC;
    grid-template-columns: 100%;
    grid-template-rows: 1fr;
    grid-template-areas: "head"
    "main";
  }
  #app > header {
    grid-area: head;
  }
  main {
    grid-area: main;
  }

  @media (min-width: 768px) {
    #app {
      grid-template-columns: auto 1fr;
      grid-template-rows: 80px 1fr ;
      grid-template-areas: "nav head"
      "nav main";
    }

    #app > header {
      grid-area: head;
    }
  }
</style>
