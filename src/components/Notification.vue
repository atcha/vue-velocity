<template>
    <div class="flex items-center px-2 py-4 hover:bg-primary-light">
        <Icon class="mx-1 flex-shrink-0 w-8 h-8 text-primary-normal bg-gray-1"
              :name="icon"
              size="5"
              round
              notify />
        <div class="flex flex-col items-start mx-3">
            <p class="uppercase text-gray-1 text-sm">{{ title }}</p>
            <p class="content text-left text-black-1 text-base mt-2 h-12">{{ content }}</p>
            <p class="text-gray-1 text-xs mt-1">20 min ago</p>
        </div>
    </div>
</template>

<script>
    import Icon from "./Icon";
    export default {
        name: "Notification",
        components: { Icon },
        props: {
            type: String,
            content: String,
            time: Date
        },
        data () {
            return {
                title: '',
                icon: ''
            }
        },
        mounted() {
            switch (this.type) {
                case 'application':
                    this.title = 'Application';
                    this.icon = 'chat';
                    break;
                case 'complaint':
                    this.title = 'Complaint';
                    this.icon = 'bolt';
                    break;
                case 'message':
                    this.title = 'Message';
                    this.icon = 'comment';
                    break;
            }
        }
    }
</script>

<style scoped>
    div:first-child {
        transition: all .25s linear;
    }
    .content {
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>