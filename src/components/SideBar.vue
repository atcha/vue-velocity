<template>
    <aside class="fixed w-72 h-screen bg-white border-l border-gray-3 border-solid shadow-2l" :class="{ 'is-open': isVisible }">
        <header class="flex justify-between items-center px-6 py-8 border-b border-gray-3 border-solid">
            <div class="flex flex-col items-start">
                <div class="flex items-center">
                    <span class="text-black-1 text-xl mr-2">81°F</span>
                    <img src="../assets/img/sidebar/sun.png" alt="Sun icon">
                </div>
                <p class="text-gray-1">New York, NY</p>
            </div>
            <Button class="w-24"
                    color="gray-2"
                    hover-color="gray-3"
                    text-color="black-3"
                    hover-text-color="black-2"
                    rounded>
                Clear
            </Button>
        </header>
    </aside>
</template>

<script>
    import Button from "./Button";
    export default {
        name: "SideBar",
        components: { Button },
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