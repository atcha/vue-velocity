<template>
    <main class="flex items-start p-20">
        <div class="flex flex-col w-3/4 mr-4">
            <div class="mb-4 flex justify-between items-start">
                <div class="flex items-end">
                    <h1 class="text-2xl leading-none text-black-1 mr-2">Vehicules Dashboard</h1>
                    <span class="text-sm leading-none text-block-3">1192 Total</span>
                </div>
                <Button class="w-56 bg-primary-normal text-white hover:bg-primary-light px-4 py-2" rounded>
                    Filter List
                </Button>
            </div>
            <Table :columns="vehiclesList.columns"
                   :actions="vehiclesList.actions"
                   :data="filteredList"
            >
            </Table>
        </div>
        <Card class="w-1/4 flex flex-col items-start">
            <header class="w-full flex justify-between items-center pb-10">
                <h2 class="uppercase text-black-3">Fleet activity map</h2>
                <Button rounded class="p-0 text-gray-1 hover:text-black-3">
                    <Icon name="keyboard_control"
                          class="w-8 h-8 flex-shrink-0" />
                </Button>
            </header>
            <section class="w-full">
                <div class="mb-8">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-black-1">Trips taken</h3>
                        <p class="text-gray-1">{{ filters.trip.data }}</p>
                    </div>
                    <Slider min-value="1" max-value="1200" v-model="filters.trip.data"></Slider>
                </div>
                <div class="mb-8">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-black-1">Service due</h3>
                        <p class="text-gray-1">{{ filters.service.data }}</p>
                    </div>
                    <Slider min-value="1" max-value="25" v-model="filters.service.data"></Slider>
                </div>
                <div class="mb-8">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-black-1">Vehicle model</h3>
                    </div>
                    <multiselect
                            v-model="filters.models.selected"
                            :options="filters.models.data"
                            :multiple="true"
                            :close-on-select="false"
                            :clear-on-select="false"
                            placeholder="Pick some models">
                    </multiselect>
                </div>
                <div class="mb-8">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-black-1">Status</h3>
                    </div>
                    <multiselect
                            v-model="filters.status.selected"
                            :options="filters.status.data"
                            :multiple="true"
                            :close-on-select="false"
                            :clear-on-select="false"
                            placeholder="Pick some status">
                    </multiselect>
                </div>
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-black-1">Location</h3>
                    </div>
                    <multiselect
                            v-model="filters.locations.selected"
                            :options="filters.locations.data"
                            :multiple="true"
                            :close-on-select="false"
                            :clear-on-select="false"
                            placeholder="Pick some status">
                    </multiselect>
                </div>
            </section>
        </Card>
    </main>
</template>

<script>
  import Button from "../components/Button";
  import Card from "../components/Card";
  import Icon from "../components/Icon";
  import Slider from "../components/Slider";
  import Table from "../components/Table";
  import Multiselect from "vue-multiselect";

  export default {
    name: "Vehicles",
    components: {
      Button,
      Card,
      Icon,
      Multiselect,
      Slider,
      Table
    },
    data() {
      return {
        vehiclesList: {
          columns: [
            {name: 'id', label: 'Name and id', required: true, sortable: true},
            {name: 'model', label: 'Vehicle model', required: true, sortable: true},
            {name: 'service', label: 'Next service', required: true, sortable: true},
            {name: 'trip', label: 'Trips', required: true, sortable: false},
            {name: 'energy', label: 'Energy used', required: false, sortable: true},
            {
              name: 'actions', label: '',
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
              energy: '450 kWh',
              serviceTime: 14,
              status: 'Service Needed',
              location: 'USA'
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
              energy: '321 kWh',
              serviceTime: 20,
              status: 'Vacacions',
              location: 'France'
            },
            {
              id: {
                id: 12012,
                name: 'Eagle',
                img: {
                  src: require('../assets/img/vehicles/eagle.png'),
                  alt: 'Eagle'
                }
              },
              model: 'BMW 7 Series',
              service: new Date('06/16/2018'),
              trip: 125,
              energy: '230 kWh',
              serviceTime: 3,
              status: 'Service Needed',
              location: 'France'
            },
            {
              id: {
                id: 12013,
                name: 'Expedition',
                img: {
                  src: require('../assets/img/vehicles/expedition.png'),
                  alt: 'Expedition'
                }
              },
              model: 'Infiniti Q50S',
              service: new Date('07/02/2018'),
              trip: 734,
              energy: '129 kWh',
              serviceTime: 12,
              status: 'Service In Progress',
              location: 'Canada'
            },
            {
              id: {
                id: 12014,
                name: 'Bliss',
                img: {
                  src: require('../assets/img/vehicles/bliss.png'),
                  alt: 'Bliss'
                }
              },
              model: 'Audi RS 7',
              service: new Date('08/27/2018'),
              trip: 823,
              energy: '553 kWh',
              serviceTime: 19,
              status: 'Service Canceled',
              location: 'USA'
            },
            {
              id: {
                id: 12015,
                name: 'Vigor',
                img: {
                  src: require('../assets/img/vehicles/vigor.png'),
                  alt: 'Vigor'
                }
              },
              model: 'Tesla Model S',
              service: new Date('10/02/2018'),
              trip: 1142,
              energy: '650 kWh',
              serviceTime: 22,
              status: 'Service In Progress',
              location: 'USA'
            },
            {
              id: {
                id: 12016,
                name: 'Scorpion',
                img: {
                  src: require('../assets/img/vehicles/scorpion.png'),
                  alt: 'Scorpion'
                }
              },
              model: 'Tesla Model X',
              service: new Date('05/29/2018'),
              trip: 925,
              energy: '452 kWh',
              serviceTime: 20,
              status: 'Service Canceled',
              location: 'Mexico'
            },
            {
              id: {
                id: 12017,
                name: 'Resolve',
                img: {
                  src: require('../assets/img/vehicles/resolve.png'),
                  alt: 'Resolve'
                }
              },
              model: 'Volvo Intellisafe',
              service: new Date('05/29/2018'),
              trip: 624,
              energy: '640 kWh',
              serviceTime: 17,
              status: 'Service Needed',
              location: 'France'
            },
            {
              id: {
                id: 12018, name: 'Spire'
              },
              model: 'Tesla Model X',
              service: new Date('08/21/2018'),
              trip: 774,
              energy: '450 kWh',
              serviceTime: 14,
              status: 'Service Needed',
              location: 'USA'
            },
            {
              id: {
                id: 12019,
                name: 'Eos',
                img: {
                  src: require('../assets/img/vehicles/42w.png'),
                  alt: 'Eos'
                }
              },
              model: 'Volvo Intellisafe',
              service: new Date('06/12/2018'),
              trip: 825,
              energy: '321 kWh',
              serviceTime: 20,
              status: 'Vacacions',
              location: 'France'
            },
            {
              id: {
                id: 12020,
                name: 'Eagle',
                img: {
                  src: require('../assets/img/vehicles/eagle.png'),
                  alt: 'Eagle'
                }
              },
              model: 'BMW 7 Series',
              service: new Date('06/16/2018'),
              trip: 125,
              energy: '230 kWh',
              serviceTime: 3,
              status: 'Service Needed',
              location: 'France'
            },
            {
              id: {
                id: 12021,
                name: 'Expedition',
                img: {
                  src: require('../assets/img/vehicles/expedition.png'),
                  alt: 'Expedition'
                }
              },
              model: 'Infiniti Q50S',
              service: new Date('07/02/2018'),
              trip: 734,
              energy: '129 kWh',
              serviceTime: 12,
              status: 'Service In Progress',
              location: 'Canada'
            },
            {
              id: {
                id: 12022,
                name: 'Bliss',
                img: {
                  src: require('../assets/img/vehicles/bliss.png'),
                  alt: 'Bliss'
                }
              },
              model: 'Audi RS 7',
              service: new Date('08/27/2018'),
              trip: 823,
              energy: '553 kWh',
              serviceTime: 19,
              status: 'Service Canceled',
              location: 'USA'
            },
            {
              id: {
                id: 12023,
                name: 'Vigor',
                img: {
                  src: require('../assets/img/vehicles/vigor.png'),
                  alt: 'Vigor'
                }
              },
              model: 'Tesla Model S',
              service: new Date('10/02/2018'),
              trip: 1142,
              energy: '650 kWh',
              serviceTime: 22,
              status: 'Service In Progress',
              location: 'USA'
            },
            {
              id: {
                id: 12024,
                name: 'Scorpion',
                img: {
                  src: require('../assets/img/vehicles/scorpion.png'),
                  alt: 'Scorpion'
                }
              },
              model: 'Tesla Model X',
              service: new Date('05/29/2018'),
              trip: 925,
              energy: '452 kWh',
              serviceTime: 20,
              status: 'Service Canceled',
              location: 'Mexico'
            },
            {
              id: {
                id: 12025,
                name: 'Resolve',
                img: {
                  src: require('../assets/img/vehicles/resolve.png'),
                  alt: 'Resolve'
                }
              },
              model: 'Volvo Intellisafe',
              service: new Date('05/29/2018'),
              trip: 624,
              energy: '640 kWh',
              serviceTime: 17,
              status: 'Service Needed',
              location: 'France'
            }
          ]
        },
        filters: {
          trip: {
            data: 1,
            type: 'slider'
          },
          service: {
            data: 1,
            type: 'slider'
          },
          models: {
            data: [
              'Tesla Model X',
              'Volvo Intellisafe',
              'BMW 7 Series',
              'Infiniti Q50S',
              'Audi RS 7',
              'Tesla Model S'
            ],
            selected: [],
            type: 'multiple-select'
          },
          status: {
            data: [
              'Service Needed',
              'Service In Progress',
              'Service Canceled',
              'In Vacacions'
            ],
            selected: [],
            type: 'multiple-select'
          },
          locations: {
            data: [
              'USA',
              'Canada',
              'Mexico',
              'France'
            ],
            selected: [],
            type: 'multiple-select'
          }
        }
      }
    },
    computed: {
      filteredList() {
        let list = this.vehiclesList;
        list = list.datas
          .filter((row) => row.trip >= this.filters.trip.data)
          .filter((row) => row.serviceTime >= this.filters.service.data)
          .filter((row) => {
            if(this.filters.models.selected && this.filters.models.selected.length > 0 ) {
              return this.filters.models.selected.includes(row.model)
            } else {
              return row;
            }
          })
          .filter((row) => {
            if(this.filters.status.selected && this.filters.status.selected.length > 0 ) {
              return this.filters.status.selected.includes(row.status)
            } else {
              return row;
            }
          })
          .filter((row) => {
            if(this.filters.locations.selected && this.filters.locations.selected.length > 0 ) {
              return this.filters.locations.selected.includes(row.location)
            } else {
              return row;
            }
          })
        return list;
      }
    },
    methods: {
      manageVehicles() {
        // eslint-disable-next-line no-console
        console.log('Vehicle manage');
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    .multiselect { @apply text-primary-normal; }
    .multiselect__select::before { @apply text-gray-1; }
    .multiselect__tags { @apply border-gray-1; }
    .multiselect__tag,
    .multiselect__option--selected.multiselect__option--highlight,
    .multiselect__option--selected.multiselect__option--highlight::after { @apply bg-primary-normal; }
    .multiselect__tag-icon::after { @apply text-white; }
    .multiselect__tag-icon:focus, .multiselect__tag-icon:hover { @apply bg-black-1 text-white; }
    .multiselect__content-wrapper { @apply border-gray-1; }
    .multiselect__option--highlight { @apply bg-primary-normal text-white; }
    .multiselect__option--highlight::after { @apply bg-primary-normal text-white; }
</style>