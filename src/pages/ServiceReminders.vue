<template>
    <main class="flex flex-wrap items-start p-20">
        <h1 class="text-2xl flex-initial leading-none text-black-1 mr-2">Service Reminders</h1>
        <div class="flex justify-between items-start w-full">
            <task-lane class="w-1/4 mr-6" id="needed" title="Service needed" :items="neededItems"></task-lane>
            <task-lane class="w-1/4 mr-6" id="waiting" title="Waiting" :items="waintingItems"></task-lane>
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
                        <l-circle-marker v-for="city in cities"
                                         :key="city.id"
                                         :lat-lng="[city.lat, city.lng]"
                                         :radius="city.radius"></l-circle-marker>
                        <l-circle v-for="(city, index) in cities"
                                  :key="index + 100"
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
                        <ul v-if="carList">
                            <li class="flex justify-between mt-4" v-for="car in carList" :key="car.id">
                                <Avatar class="flex-initial mr-4" :img="car.img" type="simple" :notify="{ text: car.id + 1 }"/>
                                <div class="flex-1">
                                    <p class="text-left">{{ car.name }}</p>
                                    <p class="text-left text-black-3">{{ car.model }}</p>
                                </div>
                                <div class="flex-1">
                                    <p class="text-right">${{car.price}}</p>
                                    <p class="text-right text-black-3">{{car.distance}} miles</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </card>
            </div>
        </div>
    </main>
</template>

<script>
    import {mapState} from 'vuex';
    import Avatar from "../components/Avatar";
    import Card from "../components/Card";
    import DoughnutChart from "../components/DoughnutChart";
    import TaskLane from "../components/TaskLane";
    import {LMap, LTileLayer, LCircleMarker, LCircle} from 'vue2-leaflet';

    export default {
        name: "ServiceReminders",
        components: {
            Avatar,
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
                        id: 0,
                        name: 'Albuquerque',
                        lat: 35.0841034,
                        lng: -106.6509851,
                        radius: smallRadius
                    },
                    {
                        id: 1,
                        name: 'Oklahoma City',
                        lat: 35.4729886,
                        lng: -97.5170536,
                        radius: largeRadius
                    },
                    {
                        id: 2,
                        name: 'Odessa',
                        lat: 31.831471448087633,
                        lng: -102.37947624999998,
                        radius: smallRadius
                    },
                    {
                        id: 3,
                        name: 'Atlanta',
                        lat: 33.7490987,
                        lng: -84.3901849,
                        radius: smallRadius
                    },
                    {
                        id: 4,
                        name: 'Lexington',
                        lat: 38.0464066,
                        lng: -84.4970393,
                        radius: largeRadius
                    },
                    {
                        id: 5,
                        name: 'Pittsburgh',
                        lat: 40.4416941,
                        lng: -79.9900861,
                        radius: smallRadius
                    },
                    {
                        id: 6,
                        name: 'Saint Louis',
                        lat: 38.6268039,
                        lng: -90.1994097,
                        radius: smallRadius
                    },
                    {
                        id: 7,
                        name: 'North Platte',
                        lat: 41.1238873,
                        lng: -100.7654232,
                        radius: smallRadius
                    },
                    {
                        id: 8,
                        name: 'Rapid City',
                        lat: 44.081176,
                        lng: -103.228006,
                        radius: smallRadius
                    },
                    {
                        id: 9,
                        name: 'Detroit Lakes',
                        lat: 46.817181,
                        lng: -95.845325,
                        radius: smallRadius
                    },
                    {
                        id: 10,
                        name: 'Missoula',
                        lat: 46.8700801,
                        lng: -113.9952796,
                        radius: smallRadius
                    },
                    {
                        id: 11,
                        name: 'Farson',
                        lat: 42.165831,
                        lng: -109.4104384,
                        radius: smallRadius
                    },
                    {
                        id: 12,
                        name: 'Winnemucca',
                        lat: 40.9729176,
                        lng: -117.7358131,
                        radius: largeRadius
                    }
                ],
                carList: [
                    {
                        id: 0,
                        name: 'Bebop',
                        model: 'Volvo Intellisafe',
                        price: '6,432',
                        distance: '1,232',
                        img: {
                            src: require('../assets/img/vehicles/bebop.png')
                        }
                    },
                    {
                        id: 1,
                        name: 'Bebop',
                        model: 'Volvo Intellisafe',
                        price: '6,432',
                        distance: '1,232',
                        img: {
                            src: require('../assets/img/vehicles/bebop.png')
                        }
                    },
                    {
                        id: 2,
                        name: 'Bebop',
                        model: 'Volvo Intellisafe',
                        price: '6,432',
                        distance: '1,232',
                        img: {
                            src: require('../assets/img/vehicles/bebop.png')
                        }
                    }
                ],
                doughnutData: {
                    labels: ['Fully serviced', 'In service', 'Waiting', 'Service needed'],
                    datasets: [{
                        weight: 5,
                        hoverBorderWidth: 10,
                        borderWidth: 0,
                        hoverBorderColor: ['#F7C137', '#00C1D4', '#8C54FF', '#2E5BFF'],
                        hoverBackgroundColor: ['#F7C137', '#00C1D4', '#8C54FF', '#2E5BFF'],
                        backgroundColor: ['#F7C137', '#00C1D4', '#8C54FF', '#2E5BFF'],
                        data: [57.8, 5, 20, 17.2]
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
                        callbacks: {
                            title: (tooltipItem, data) => {
                                let dataset = data.datasets[0];
                                let percent = (dataset.data[tooltipItem[0].index] / dataset._meta[0].total) * 100;
                                return percent + '%';
                            },
                            label: (tooltipItem, data) => {
                                return data['labels'][tooltipItem['index']];
                            }
                        },
                        position: 'custom',
                        backgroundColor: 'transparent',
                        titleFontSize: 48,
                        titleFontColor: '#2E384D',
                        titleAlign: 'center',
                        bodyFontColor: '#B0BAC9',
                        bodyAlign: 'center',
                        bodyFontSize: 12,
                        displayColors: false
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