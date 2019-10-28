<template>
    <a :to="url" :alt="alt">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "Button",
        props: {
            color: { type: String },
            textColor: { type: String },
            label: { type: String },
            round: { type: Boolean },
            flat: { type: Boolean },
            url: { type: String },
            alt: { type: String }
        },
        data () {
            return {

            }
        },

    }
</script>

<style scoped>

</style>