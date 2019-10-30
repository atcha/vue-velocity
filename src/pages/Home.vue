<template>
    <main class="flex p-20">
        <Card :img="operatingCard.img" :title="operatingCard.title" :content="operatingCard.content"></Card>
    </main>
</template>

<script>
    import Card from "../components/Card";
    export default {
        name: 'home',
        components: { Card },
        data () {
            return {
                operatingCard: {
                    img: {
                        url: require('../assets/img/home/operating-score.png'),
                        alt: 'Operating Score',
                        width: 203,
                        height: 142
                    },
                    title: 'Welcome to Velocity',
                    content: 'All cars are operating well. There were 1,233 trips since your last login.'
                }
            }
        }
    }
</script>

<style>
</style>
