<template>
    <div class="pb-10">
        <h3 class="uppercase text-gray-1 text-left">{{ title }} <span
                class="rounded-full px-2 py-1 bg-primary-light text-primary-normal text-xs leading-none">{{itemCount}}</span>
        </h3>
        <div class="h-full mt-3">
            <draggable class="h-full"
                       v-model="draggables"
                       :options="dragOptions"
                       @start="drag = true"
                       @end="drag = false">
                <transition-group style="display: block; min-height: 115px; padding-bottom: 115px;" type="transition" :name="!drag ? 'flip-list' : null">
                    <div class="mb-3" v-for="item in items" :key="item.id">
                        <item :item="item" :group="id"></item>
                    </div>
                </transition-group>
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
        data() {
            return {
                dragOptions: {
                    animation: 200,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                },
                drag: false
            }
        },
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
    .ghost {
        @apply opacity-50 bg-blue-light;
    }
    .flip-list-move {
        transition: transform 0.5s;
    }
</style>