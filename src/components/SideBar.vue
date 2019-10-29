<template>
    <aside class="fixed w-64 h-screen bg-white border-l border-gray-3 border-solid shadow-2l" :class="{ 'is-open': isVisible }">
        test sidebar
    </aside>
</template>

<script>
    export default {
        name: "SideBar",
        props: {
            isVisible: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    aside {
        top: 80px;
        right: -16rem;
        opacity: 0;
        transition: transform .25s cubic-bezier(0.4,0.0,0.2,1),
                    opacity .30s linear;
    }
    aside.is-open {
        transform: translateX(-16rem);
        opacity: 1;
    }
</style>