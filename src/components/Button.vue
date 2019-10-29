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
            color: String,
            hoverColor: String,
            textColor: String,
            hoverTextColor: String,
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
                let colors

                if (this.color !== void 0) {
                    if (this.flat === true) {
                        colors = `text-${this.textColor || this.color} hover:text-${this.hoverTextColor || this.hoverColor}`
                    }
                    else {
                        colors = `bg-${this.color} text-${this.textColor || 'white'} ${'hover:bg-' + this.hoverColor || ''} hover:text-${this.hoverTextColor || this.hoverColor}`

                    }
                }
                else if (this.textColor) {
                    colors = `text-${this.textColor}`
                    if (this.hoverTextColor) {
                        colors += ` hover:text-${this.hoverTextColor}`
                    }
                }

                return (this.round === true ? 'rounded-full p-0' : 'px-4 py-2') +
                (this.rounded === true ? ' rounded' : '') +
                (colors !== void 0 ? ' ' + colors : '')

            }
        }
    }
</script>

<style scoped>
    button {
        transition: all .25s ease;
    }
</style>