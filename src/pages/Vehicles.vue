<template>
    <main class="flex p-20">
        <div class="flex flex-col w-3/4 mr-4">
            <div class="mb-4 flex justify-between items-start">
                <div class="flex items-end">
                    <h1 class="text-2xl leading-none text-black-1 mr-2">Vehicules Dashboard</h1>
                    <span class="text-sm leading-none text-block-3">1192 Total</span>
                </div>
                <Button class="w-56 bg-primary-normal text-white hover:bg-primary-light" rounded>
                    Filter List
                </Button>
            </div>
            <Table :columns="vehiclesList.columns"
                   :actions="vehiclesList.actions"
                   :data="vehiclesList.datas"
                   :filter="filters"
            >
            </Table>
        </div>
        <Card class="w-1/4 flex flex-col items-start">
            <header class="pb-10">
                <h2 class="uppercase text-gray-1">Fleet activity map</h2>
            </header>
            <section>
                <div>
                    <div class="flex items-center justify-between">
                        <h3 class="text-black-1">Trips taken</h3>
                        <p class="text-gray-1">{{ filters.trip }}</p>
                    </div>
                    <Slider min-value="1" max-value="1200" v-model="filters.trip"></Slider>
                </div>
            </section>
        </Card>
    </main>
</template>

<script>
    import Button from "../components/Button";
    import Card from "../components/Card";
    import Slider from "../components/Slider";
    import Table from "../components/Table";
    export default {
        name: "Vehicles",
        components: {
            Button,
            Card,
            Slider,
            Table
        },
        data () {
            return {
                vehiclesList: {
                    columns: [
                        { name: 'id', label: 'Name and id', required: true, sortable: true },
                        { name: 'model', label: 'Vehicle model', required: true, sortable: true },
                        { name: 'service', label: 'Next service', required: true, sortable: true },
                        { name: 'trip', label: 'Trips', required: true, sortable: false },
                        { name: 'energy', label: 'Energy used', required: false, sortable: true },
                        { name: 'actions', label: '',
                            actions: [
                                {
                                    name: 'manage', label: 'Manage', function: this.manageVehicles()
                                }
                            ]
                        }
                    ],
                    datas: [
                        {
                          id: {
                            id: 12010, name: 'Spire'
                          },
                          model: 'Tesla Model X',
                          service: new Date('08/21/2018'),
                          trip: 774,
                          energy: '450 kWh'
                        },
                        {
                          id: {
                            id: 12011,
                            name: 'Eos',
                            img: {
                              src: require('../assets/img/vehicles/42w.png'),
                              alt: 'Eos'
                            }
                          },
                          model: 'Volvo Intellisafe',
                          service: new Date('06/12/2018'),
                          trip: 825,
                          energy: '321 kWh'
                        }
                    ]
                },
                filters: {
                    trip: 753
                }
            }
        },
        methods: {
            manageVehicles () {
                // eslint-disable-next-line no-console
                console.log('Vehicle manage');
            }
        }
    }
</script>

<style scoped>

</style>