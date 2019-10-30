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
                    (colors !== void 0 ? ' ' + colors : '')

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