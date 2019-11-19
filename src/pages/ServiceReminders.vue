<template>
    <main class="flex flex-wrap p-20 min-h-screen">
        <h1 class="text-2xl leading-none text-black-1 mr-2">Service Reminders</h1>
        <div class="flex justify-between w-full">
            <task-lane class="w-1/4 mr-6" id="needed" title="Service needed" :items="neededItems"></task-lane>
            <task-lane class="w-1/4 mr-6" id="waiting" title="Wainting" :items="waintingItems"></task-lane>
            <task-lane class="w-1/4 mr-6" id="service" title="In service" :items="serviceItems"></task-lane>
            <task-lane class="w-1/4" id="serviced" title="Fully serviced" :items="servicedItems"></task-lane>
        </div>
    </main>
</template>

<script>
    import { mapState } from 'vuex';
    import TaskLane from "../components/TaskLane";

    export default {
        name: "ServiceReminders",
        components: {
            TaskLane
        },
        data() {
            return {
            }
        },
        computed: mapState({
            neededItems: s => s.items.needed,
            waintingItems: s => s.items.waiting,
            serviceItems: s => s.items.service,
            servicedItems: s => s.items.serviced
        })
    }
</script>

<style scoped>
</style>