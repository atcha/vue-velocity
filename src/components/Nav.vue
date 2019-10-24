<template>
    <nav class="c-nav bg-white" :class="{ 'is-closed': isClosed }">
        <div class="c-nav__header">
            <button @click="isClosed = !isClosed">
                <svg xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     height="13.224941913898164" width="18">
                    <use xlink:href="#c-icon-menu"></use>
                </svg>
            </button>
        </div>
        <div class="c-nav__user">

        </div>
        <ul class="c-nav__menu">
            <li class="c-nav__menuitem" v-for="item in menuListItem" :key="item.id">
                <a href="#" :class="{'active': item.isActive}" class="block py-4 px-8 border-l-3 border-solid border-transparent text-gray hover:border-primary-normal hover:bg-primary-light hover:text-primary-normal">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"
                         height="13.224941913898164" width="18">
                        <use v-bind="{'xlink:href': item.icon}"></use>
                    </svg>
                    <span>{{ item.title }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Nav',
        props: {
            menuListItem: Array,
            User: Object
        },
        data () {
            return {
                isClosed: true
            }
        },
        mounted() {
            // eslint-disable-next-line no-console
            console.log(this.menuListItem)
        }
    }
</script>

<style>
    .c-nav { grid-area: nav }

    .c-nav__header {
        padding: 30px;
        display: flex;
        justify-content: left
    }

    .c-nav__user {
        height: 100px;
        padding: 30px
    }

    .c-nav__menuitem a {
        width: 215px;
        transition: width .25s cubic-bezier(0.4,0.0,0.2,1), background-color .25s cubic-bezier(0.4,0.0,0.2,1);
        overflow: hidden;
    }
    .c-nav__menuitem a span { transition: visibility .2s cubic-bezier(0.4,0.0,0.2,1) }
    .c-nav.is-closed .c-nav__menuitem a { width: 80px }
    .c-nav.is-closed .c-nav__menuitem a span { visibility: hidden }
</style>