<template>
    <nav class="c-nav">
        <div class="c-nav__header">
            <button>
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
            <li class="c-nav__menuitem">
                <a href=""></a>
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
                isOpen: false
            }
        }
    }
</script>

<style>
    .c-nav {
        grid-area: nav;
        width: 215px;
    }
    .c-nav.is-closed { width: 80px; }
</style>