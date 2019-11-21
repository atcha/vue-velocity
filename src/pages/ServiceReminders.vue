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
            <card class="w-2/3 mr-6">
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
                        <l-circle-marker v-for="(city, index) in cities"
                                         :key="index"
                                         :lat-lng="[city.lat, city.lng]"
                                         :radius="city.radius"></l-circle-marker>
                        <l-circle v-for="(city, index) in cities"
                                  :key="index"
                                  :lat-lng="[city.lat, city.lng]"
                                  :radius="circle.radius"
                                  :fill="true"
                                  :fill-opacity="1"></l-circle>
                    </l-map>
                </section>
            </card>
            <div class="w-1/3 flex flex-col">
                <card class="mb-6 w-full">
                    <header class="w-full flex justify-between items-center m-10">
                        <h2 class="uppercase text-black-3">Fleet activity map</h2>
                    </header>
                    <section class="mb-10 mx-10">
                        <doughnut-chart :chartdata="doughnutData" :options="doughnutOptions"></doughnut-chart>
                    </section>
                </card>
                <card class="w-full">
                    <header class="w-full flex justify-between items-center m-10">
                        <h2 class="uppercase text-black-3">Fleet activity map</h2>
                    </header>
                    <section class="mb-10 mx-10">
                    </section>
                </card>
            </div>
        </div>
    </main>
</template>

<script>
    import {mapState} from 'vuex';
    import Card from "../components/Card";
    import DoughnutChart from "../components/DoughnutChart";
    import TaskLane from "../components/TaskLane";
    import {LMap, LTileLayer, LCircleMarker, LCircle} from 'vue2-leaflet';

    export default {
        name: "ServiceReminders",
        components: {
            Card,
            DoughnutChart,
            LMap,
            LTileLayer,
            LCircleMarker,
            LCircle,
            TaskLane
        },
        data() {
            // eslint-disable-next-line no-unused-vars
            let smallRadius = 15;
            // eslint-disable-next-line no-unused-vars
            let largeRadius = 40;
            return {
                zoom: 4,
                largeRadius: 40,
                smallRadius: 15,
                center: [39.7837304, -100.4458825],
                circle: {
                    radius: 40000
                },
                url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                cities: [
                    {
                        name: 'Albuquerque',
                        lat: 35.0841034,
                        lng: -106.6509851,
                        radius: smallRadius
                    },
                    {
                        name: 'Oklahoma City',
                        lat: 35.4729886,
                        lng: -97.5170536,
                        radius: largeRadius
                    },
                    {
                        name: 'Odessa',
                        lat: 31.831471448087633,
                        lng: -102.37947624999998,
                        radius: smallRadius
                    },
                    {
                        name: 'Atlanta',
                        lat: 33.7490987,
                        lng: -84.3901849,
                        radius: smallRadius
                    },
                    {
                        name: 'Lexington',
                        lat: 38.0464066,
                        lng: -84.4970393,
                        radius: largeRadius
                    },
                    {
                        name: 'Pittsburgh',
                        lat: 40.4416941,
                        lng: -79.9900861,
                        radius: smallRadius
                    },
                    {
                        name: 'Saint Louis',
                        lat: 38.6268039,
                        lng: -90.1994097,
                        radius: smallRadius
                    },
                    {
                        name: 'North Platte',
                        lat: 41.1238873,
                        lng: -100.7654232,
                        radius: smallRadius
                    },
                    {
                        name: 'Rapid City',
                        lat: 44.081176,
                        lng: -103.228006,
                        radius: smallRadius
                    },
                    {
                        name: 'Detroit Lakes',
                        lat: 46.817181,
                        lng: -95.845325,
                        radius: smallRadius
                    },
                    {
                        name: 'Missoula',
                        lat: 46.8700801,
                        lng: -113.9952796,
                        radius: smallRadius
                    },
                    {
                        name: 'Farson',
                        lat: 42.165831,
                        lng: -109.4104384,
                        radius: smallRadius
                    },
                    {
                        name: 'Winnemucca',
                        lat: 40.9729176,
                        lng: -117.7358131,
                        radius: largeRadius
                    }
                ],
                doughnutData: {
                    labels: ['Fully serviced', 'In service', 'Waiting', 'Service needed'],
                    datasets: [{
                        weight: 5,
                        hoverBorderWidth: 10,
                        borderWidth: 0,
                        hoverBorderColor: ['#F7C137', '#00C1D4', '#8C54FF','#2E5BFF'],
                        hoverBackgroundColor: ['#F7C137', '#00C1D4', '#8C54FF','#2E5BFF'],
                        backgroundColor: ['#F7C137', '#00C1D4', '#8C54FF','#2E5BFF'],
                        data: [57.8, 5, 20, 17.2 ]
                    }]
                },
                doughnutOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 80,
                    animation: {
                        animateScale: true
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: 'center',
                        labels: {
                            boxWidth: 10,
                            usePointStyle: true,
                            padding: 30,
                            fontColor: "#2E384D"
                        }
                    },
                    tooltips: {

                    }
                },
            }
        },
        computed: mapState({
            neededItems: s => s.items.needed,
            waintingItems: s => s.items.waiting,
            serviceItems: s => s.items.service,
            servicedItems: s => s.items.serviced
        }),
        methods: {
            zoomUpdated(zoom) {
                this.largeRadius = (this.largeRadius * zoom) / this.zoom;
                this.smallRadius = (this.smallRadius * zoom) / this.zoom;
                this.circle.radius = (this.circle.radius * zoom) / this.zoom;
            }
        }
    }
</script>

<style scoped>
</style>