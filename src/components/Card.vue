<template>
    <aside class="p-10 bg-white shadow-2l">
        <div class="flex">
            <img v-if="img"
                 class="mr-10"
                 :src="img.url"
                 :alt="img.alt"
                 :width="img.width"
                 :height="img.height">
            <div class="flex flex-col justify-center items-start">
                <h2 class="text-black-1 text-xl" v-if="title">{{ title }}</h2>
                <p class="text-gray-1 text-left" v-if="content">{{ content }}</p>
            </div>
        </div>
        <slot></slot>
    </aside>
</template>

<script>
  export default {
    name: "Card",
    props: {
      img: Object,
      title: String,
      content: String,

    }
  }
</script>

<style scoped>

</style>