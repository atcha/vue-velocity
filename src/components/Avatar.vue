<template>
    <div class="c-avatar" :class="avatarClass">
        <template v-if="type === 'simple'">
            <div class="c-avatar__picture">
                <img :src="img.src" :alt="img.alt" :class="imgClass" />
            </div>
        </template>
        <template v-else-if="type === 'nav'">
            <div class="c-avatar__picture w-8 mr-3">
                <img class="rounded" :src="img.src" :alt="img.alt" :class="imgClass" />
            </div>
            <div class="c-avatar__content flex flex-col items-start">
                <p class="text-sm">Welcome</p>
                <p class="text-gray-1 text-sm">{{ name }}</p>
            </div>
        </template>
        <template v-else-if="type === 'vertical'">
            <div class="c-avatar__picture">
                <img :src="img.src" :alt="img.alt" :class="imgClass" />
            </div>
            <div class="c-avatar__content">
                <p>{{ name }}</p>
                <p>{{ professionnalFunction }}</p>
            </div>
        </template>
        <template v-else-if="type === 'horizontal'">
            <div class="c-avatar__picture">
                <img :src="img.src" :alt="img.alt" :class="imgClass" />
            </div>
            <div class="c-avatar__content">
                <p>{{ name }}</p>
                <p>{{ professionnalFunction }}</p>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        props: {
            type: { type: String },
            img: { type: Object },
            imgClass: { type: String },
            name: { type: String },
            professionnalFunction: { type: String }
        },
        data () {
            return {
                avatarClass: ''
            }
        },
        mounted() {
            switch (this.type) {
                case 'nav':
                    this.avatarClass = 'flex items-center w-40';
                    break;
                case 'horizontal':
                    this.avatarClass = 'flex items-center';
                    break;
                case 'vertical':
                    this.avatarClass = 'flex flex-col';
                    break;
            }
        }
    }
</script>

<style scoped>

</style>