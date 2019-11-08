<template>
    <div class="relative flex items-center justify-center" :class="classes">
        <span v-if="notify" class="absolute top-0 right-8 h-1 w-1 rounded-full bg-primary-normal border border-solid border-primary-normal"></span>
        <svg xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             class="fill-current" :class="[ size ? 'w-'+ size + ' h-' + size : ''  ]">
            <use v-bind="{'xlink:href' : '#c-icon-' + name }"></use>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "Icon",
        props: {
            notify: Boolean,
            round: Boolean,
            name: String,
            size: String
        },
        computed: {
            classes () {
                return (this.round === true ? 'rounded-full p-0' : '')
            }
        }
    }
</script>

<style scoped>
</style>