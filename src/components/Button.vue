<template>
    <a href="">
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
            round: { type: Boolean }
        }
    }
</script>

<style scoped>

</style>