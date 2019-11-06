<template>
    <button type="button"
            :to="url"
            :alt="alt"
            :class="classes">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            label: String,
            rounded: Boolean,
            round: Boolean,
            flat: Boolean,
            url: String,
            alt: String
        },
        data () {
            return {
                buttonClass: ''
            }
        },
        computed: {
            classes () {
                return (this.round === true ? 'rounded-full p-0' : '') +
                (this.rounded === true ? ' rounded' : '')

            }
        }
    }
</script>

<style scoped>
    button {
        transition: all .25s ease;
    }
</style>