<template>
    <span class="relative p-2" :class="classes">
        <span v-if="notify" class="absolute top-0 right-8 h-1 w-1 rounded-full bg-primary-normal border border-solid border-primary-normal"></span>
        <svg xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             class="fill-current">
            <use v-bind="{'xlink:href' : '#c-icon-' + name }"></use>
        </svg>
    </span>
</template>

<script>
    export default {
        name: "Icon",
        props: {
            color: String,
            hoverColor: String,
            textColor: String,
            hoverTextColor: String,
            notify: Boolean,
            round: Boolean,
            name: String
        },
        computed: {
            classes () {
                return (this.round === true ? 'rounded-full p-0' : 'px-4 py-2')
            }
        }
    }
</script>

<style scoped>
    svg {
        width: 100%;
        height: 100%;
    }
</style>