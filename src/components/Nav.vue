<template>
    <nav class="c-nav bg-white" :class="{ 'is-closed': isClosed }">
        <div class="c-nav__header">
            <button @click="isClosed = !isClosed">
                <svg height="13.224941913898164" width="18">
                    <defs>
                        <path id="path-1" opacity="1" fill-rule="evenodd" d="M0,1.8892774627758797 L0,4.584961743603344e-9 L18,4.584961743603344e-9 L18,1.8892774627758797 L0,1.8892774627758797 L0,7.557109360511475 L0,5.6678319023205574 L18,5.6678319023205574 L18,7.557109360511475 L0,7.557109360511475 L0,13.224942211921388 L0,11.33566475373047 L11,11.33566475373047 L11,13.224942211921388 L0,13.224942211921388 L0,1.8892774627758797Z"/>
                    </defs>
                    <g opacity="1">
                        <use xlink:href="#path-1" fill="rgb(191,197,210)" fill-opacity="1"/>
                    </g>
                </svg>
            </button>
        </div>
        <div class="c-nav__user">

        </div>
        <ul class="c-nav__menu">
            <li class="c-nav__menuitem" v-for="item in menuListItem" :key="item.id">
                <a href="#" :class="{'active': item.isActive}" class="block py-4 px-8 border-l-3 border-solid border-transparent text-gray hover:border-primary-normal hover:bg-primary-light hover:text-primary-normal">
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