<template>
    <main class="flex flex-wrap items-start p-20">
        <h1 class="text-2xl flex-initial leading-none text-black-1 mr-2">Service Reminders</h1>
        <div class="flex justify-between w-full">
            <task-lane class="w-1/4 mr-6" id="needed" title="Service needed" :items="neededItems"></task-lane>
            <task-lane class="w-1/4 mr-6" id="waiting" title="Wainting" :items="waintingItems"></task-lane>
            <task-lane class="w-1/4 mr-6" id="service" title="In service" :items="serviceItems"></task-lane>
            <task-lane class="w-1/4" id="serviced" title="Fully serviced" :items="servicedItems"></task-lane>
        </div>
        <div class="flex justify-between w-full">
            <card>
                <header class="w-full flex justify-between items-center m-10">
                    <h2 class="uppercase text-black-3">Fleet activity map</h2>
                </header>
                <section class="overflow-hidden" style="height: 500px;">
                    <l-map
                            ref="map"
                            :zoom="zoom"
                            @update:zoom="zoomUpdated"
                            :center="center"
                    >
                        <l-tile-layer :url="url"></l-tile-layer>
                        <l-circle-marker :lat-lng="[40.730451, -73.959626]" :radius="largeRadius"></l-circle-marker>
                        <l-circle :lat-lng="[40.730451, -73.959626]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                        <l-circle-marker :lat-lng="[40.725169, -73.987105]" :radius="smallRadius"></l-circle-marker>
                        <l-circle :lat-lng="[40.725169, -73.987105]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                        <l-circle-marker :lat-lng="[40.731543, -73.907368]" :radius="smallRadius"></l-circle-marker>
                        <l-circle :lat-lng="[40.731543, -73.907368]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                        <l-circle-marker :lat-lng="[40.715542, -74.011095]" :radius="largeRadius"></l-circle-marker>
                        <l-circle :lat-lng="[40.715542, -74.011095]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                        <l-circle-marker :lat-lng="[40.738795, -73.990796]" :radius="largeRadius"></l-circle-marker>
                        <l-circle :lat-lng="[40.738795, -73.990796]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                        <l-circle-marker :lat-lng="[40.737072, -73.929598]" :radius="largeRadius"></l-circle-marker>
                        <l-circle :lat-lng="[40.737072, -73.929598]" :radius="40" :fill="true" :fill-opacity="1"></l-circle>
                    </l-map>
                </section>
            </card>
        </div>
    </main>
</template>

<script>
    import { mapState } from 'vuex';
    import Card from "../components/Card";
    import TaskLane from "../components/TaskLane";

    export default {
        name: "ServiceReminders",
        components: {
            Card,
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