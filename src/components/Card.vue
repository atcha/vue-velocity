<template>
    <aside class="bg-white shadow-2l">
        <div v-if="title && content" class="flex md:flex-col">
            <img v-if="img"
                 class="m-5 md:m-10 md:self-center"
                 :src="img.url"
                 :alt="img.alt"
                 :width="img.width"
                 :height="img.height">
            <div class="flex flex-col justify-center items-start md:m-10 md:mt-0 md:items-center">
                <h2 class="text-black-1 text-lg md:hidden" v-if="title">{{ title }}</h2>
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