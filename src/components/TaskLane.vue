<template>
    <div>
        <h3 class="uppercase text-gray-1 text-left">{{ title }} <span class="rounded-full px-2 py-1 bg-primary-light text-primary-normal text-xs leading-none">{{itemCount}}</span></h3>
        <div class="mt-3">
            <draggable v-model="draggables" :options="{ group: 'default' }">
                <div v-for="item in items" :key="item.id">
                    <item class="mb-3" :item="item"></item>
                </div>
            </draggable>
        </div>
    </div>
</template>

<script>
    import Draggable from 'vuedraggable';
    import TaskCard from "./TaskCard";
    export default {
        name: "TaskLane",
        components: {
            item: TaskCard,
            draggable: Draggable
        },
        props: ['items', 'title', 'id'],
        computed: {
            itemCount() {
                if (!this.items) return '';
                return this.items.length;
            },
            draggables: {
                get() {
                    return this.items;
                },
                set(items) {
                    this.$store.commit('updateItems', {
                        items,
                        id: this.id
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>