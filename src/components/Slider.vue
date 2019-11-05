<template>
    <div>
        <input type="range" :min="minValue" :max="maxValue" v-model="inputVal">
    </div>
</template>

<script>
    export default {
        name: "Slider",
        props: ['minValue', 'maxValue', 'value'],
        data() {
            return { inputVal: this.value }
        },
        watch: {
            inputVal(val) {
                this.$emit('input', val);
            }
        }
    }
</script>

<style scoped>
    input[type=range] {
        -webkit-appearance: none;
        height: 4px;
        border-radius: 5px;
        background: rgba(46, 91, 255, 0.15);
        transition: opacity .15s ease-in-out;
        @apply opacity-75 outline-none text-white w-full;
    }
    input[type=range]:hover { opacity: 1; }
    /*==============================*/
    /* le curseur                   */
    /*==============================*/
    input[type=range]::-webkit-slider-thumb {
        width: 8px;
        height: 8px;
        @apply border-solid border-4 border-primary-normal rounded-full bg-white cursor-pointer;
    }
    input[type=range]::-moz-range-thumb {
        width: 8px;
        height: 8px;
        @apply border-solid border-4 border-primary-normal rounded-full bg-white cursor-pointer;
    }
    input[type=range]::-ms-thumb {
        width: 8px;
        height: 8px;
        @apply border-solid border-4 border-primary-normal rounded-full bg-white cursor-pointer;
    }
    [type="range"]::-moz-range-progress {
        width: 4px;
        height: 4px;
        @apply bg-primary-normal;
    }
    [type="range"]::-ms-fill-lower {
        width: 4px;
        height: 4px;
        @apply bg-primary-normal;
    }
</style>