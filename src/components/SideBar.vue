<template>
    <article class="fixed w-72 h-screen bg-white border-l border-gray-3 border-solid shadow-2l" :class="{ 'is-open': isVisible }">
        <header class="flex justify-between items-center px-6 py-8 border-b border-gray-3 border-solid">
            <div class="flex flex-col items-start">
                <div class="flex items-center">
                    <span class="text-black-1 text-3xl mr-2">81°F</span>
                    <img src="../assets/img/sidebar/sun.png" alt="Sun icon">
                </div>
                <p class="text-gray-0">New York, NY</p>
            </div>
            <Button class="w-24 bg-gray-2 text-black-3 hover:bg-gray-3 hover:text-black-2"
                    rounded
                    @click.native="clearNotifications">
                Clear
            </Button>
        </header>
        <ul v-if="notifications.length > 0">
            <li v-for="(notification, index) in notifications" :key="index" class="border-b border-gray-3 border-solid">
                <Notification class="cursor-pointer" :type="notification.type"
                              :content="notification.content"
                              :time="notification.time" />
            </li>
        </ul>
    </article>
</template>

<script>
    import Button from "./Button";
    import Notification from "./Notification";

    export default {
        name: "SideBar",
        components: {
            Button,
            Notification
        },
        props: {
            isVisible: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                notifications: [
                    {
                        type: 'message',
                        content: 'How may we assist you today?',
                        time: new Date()
                    },
                    {
                        type: 'application',
                        content: 'Application for Kate Smith is waiting for your approval.',
                        time: new Date()
                    },
                    {
                        type: 'application',
                        content: 'To process your order, i\'ll need your full personnal etc etc',
                        time: new Date()
                    },
                    {
                        type: 'complaint',
                        content: 'We\'re so sorry you had a bad experience!',
                        time: new Date()
                    },
                ]
            }
        },
        methods: {
            clearNotifications () {
                this.notifications = [];
            }
        }
    }
</script>

<style scoped>
    article {
        top: 80px;
        right: -18rem;
        opacity: 0;
        transition: transform .25s cubic-bezier(0.4,0.0,0.2,1),
                    opacity .30s linear;
    }
    article.is-open {
        transform: translateX(-18rem);
        opacity: 1;
    }
</style>