<template>
    <div>
        <h3 class="uppercase text-gray-1 text-left">{{ title }} <span
                class="rounded-full px-2 py-1 bg-primary-light text-primary-normal text-xs leading-none">{{itemCount}}</span>
        </h3>
        <div class="mt-3">
            <draggable v-model="draggables"
                       :options="dragOptions"
                       @start="drag = true"
                       @end="drag = false">
                <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                    <div v-for="item in items" :key="item.id">
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
        opacity: 0.5;
        background: #c8ebfb;
    }
    .flip-list-move {
        transition: transform 0.5s;
    }
</style>