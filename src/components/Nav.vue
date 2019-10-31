<template>
    <nav class="c-nav bg-white" :class="{ 'is-closed': isClosed }">
        <div class="c-nav__header">
            <button @click="isClosed = !isClosed">
                <svg xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     height="24" width="24">
                    <use xlink:href="#c-icon-menu"></use>
                </svg>
            </button>
        </div>
        <div class="c-nav__user">
            <avatar :class="{ 'hidden': isClosed }"
                    type="nav"
                    :name="personName"
                    :img="this.user.img"
                    :img-size="{w:26, h:26}"
                    :professionnal-function="this.user.professionnalFunction">
            </avatar>
        </div>
        <ul class="c-nav__menu">
            <li class="c-nav__menuitem" v-for="item in menuListItem" :key="item.id">
                <router-link :to="item.url"
                             :class="{'active': item.isActive}"
                             class="flex py-4 px-6 text-gray-1 hover:border-l-3 hover:border-solid hover:border-primary-normal hover:bg-primary-light hover:text-primary-normal">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"
                         height="24"
                         width="24" class="fill-current">
                        <use v-bind="{'xlink:href': item.icon}"></use>
                    </svg>
                    <span class="ml-3">{{ item.title }}</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Avatar from "./Avatar";

    export default {
        name: 'Nav',
        components: { Avatar },
        props: {
            menuListItem: Array,
            user: Object
        },
        data () {
            return {
                isClosed: true,
                personName: this.user.firstName + ' ' + this.user.lastName
            }
        }
    }
</script>

<style>
    .c-nav {
        grid-area: nav;
        width: 215px;
        transition: width .25s cubic-bezier(0.4,0.0,0.2,1);
        overflow: hidden;
    }
    .c-nav.is-closed { width: 80px; }

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
        transition: border .10s linear,
                    width .25s cubic-bezier(0.4,0.0,0.2,1),
                    background-color .25s cubic-bezier(0.4,0.0,0.2,1),
                    color .25s cubic-bezier(0.4,0.0,0.2,1);
    }
    .c-nav__menuitem a svg {
        width: 24px;
        height: 24px;
    }
    .c-nav .c-nav__menuitem a span { transition: visibility .10s .25s cubic-bezier(0.4,0.0,0.2,1); }
    .c-nav.is-closed .c-nav__menuitem a span {
        visibility: hidden;
        transition: visibility .25s cubic-bezier(0.4,0.0,0.2,1);
    }

    /* Actve state */
    .c-nav__menuitem a.is-active {
        @apply  border-l-3 border-solid border-primary-normal bg-primary-light text-primary-normal;
    }
</style>