<template>
    <div :class="cardClass" class="p-5 flex bg-white shadow-2l cursor-move">
        <div class="flex-1">
            <p class="text-left">{{ item.name }}</p>
            <p class="text-left text-black-3">{{ item.info }}</p>
        </div>
        <div class="flex-1">
            <p class="text-right">${{ item.price }}</p>
            <p class="text-right text-black-3">{{item.date}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskCard",
        props: ['item', 'group'],
        computed: {
            cardClass() {
                let cardClass = 'border-l-3 border-solid ';
                switch (this.group) {
                    case "needed":
                        cardClass += 'border-primary-normal';
                        break;
                    case "waiting":
                        cardClass += 'border-purple-normal';
                        break;
                    case "service":
                        cardClass += 'border-blue-normal';
                        break;
                    case "serviced":
                        cardClass += 'border-yellow-normal';
                        break;
                }
                return cardClass;
            }
        }
    }
</script>

<style scoped>

</style>