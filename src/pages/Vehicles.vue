<template>
    <main class="flex items-start p-20">
        <div class="flex flex-col w-3/4 mr-4">
            <div class="mb-4 flex justify-between items-start">
                <div class="flex items-end">
                    <h1 class="text-2xl leading-none text-black-1 mr-2">Vehicules Dashboard</h1>
                    <span class="text-sm leading-none text-block-3">{{ vehiclesList.datas.length }} Total</span>
                </div>
                <Button class="w-56 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light" rounded>
                    Filter List
                </Button>
            </div>
            <Table :columns="vehiclesList.columns"
                   :actions="vehiclesList.actions"
                   :data="filteredList">
            </Table>
        </div>
        <Card class="w-1/4 flex flex-col items-stretch items-start">
            <header class="flex justify-between items-center m-10">
                <h2 class="uppercase text-black-3">Fleet activity map</h2>
                <Button rounded class="p-0 text-gray-1 hover:text-black-3">
                    <Icon name="keyboard_control"
                          class="w-8 h-8 flex-shrink-0" ></Icon>
                </Button>
            </header>
            <section class="mb-10 mx-10">
                <MultipleFilter v-for="(filter, index) in filters" :key="index"
                        :type="filter.type"
                        :title="filter.title"
                        :data="filter.data"
                        :min-value="filter.minValue"
                        :max-value="filter.maxValue"
                        v-model="filter.selected">
                </MultipleFilter>
            </section>
        </Card>
    </main>
</template>

<script>
  import Button from "../components/Button";
  import Card from "../components/Card";
  import MultipleFilter from "../components/MultipleFilter";
  import Icon from "../components/Icon";
  import Table from "../components/Table";

  export default {
    name: "Vehicles",
    components: {
      Button,
      Card,
      MultipleFilter,
      Icon,
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
              status: 'In Vacacions',
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
              status: 'In Vacacions',
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
            },
            {
              id: {
                id: 12026,
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
        filters: [
          {
            name: 'trip',
            title: 'Trips taken',
            data: 1,
            selected: 1,
            minValue: 1,
            maxValue: 1200,
            type: 'slider'
          },
          {
            name: 'service',
            title: 'Service due',
            data: 1,
            selected: 1,
            minValue: 1,
            maxValue: 30,
            type: 'slider'
          },
          {
            name: 'models',
            title: 'Vehicle model',
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
          {
            name: 'status',
            title: 'status',
            data: [
              'Service Needed',
              'Service In Progress',
              'Service Canceled',
              'In Vacacions'
            ],
            selected: [],
            type: 'multiple-select'
          },
          {
            name: 'locations',
            title: 'Location',
            data: [
              'USA',
              'Canada',
              'Mexico',
              'France'
            ],
            selected: [],
            type: 'multiple-select'
          }
        ]
      }
    },
    computed: {
      filteredList() {
        let list = this.vehiclesList;
        return list.datas
          .filter((row) => {
            let response = true;
            this.filters.forEach((filter) => {
              if(filter.name === 'trip') {
                return response = row.trip >= Number(filter.selected);
              }
            });
            return response;
          }).filter((row) => {
            let response = true;
            this.filters.forEach((filter) => {
              if (filter.name === 'service') {
                response = row.serviceTime >= Number(filter.selected);
              }
            });
            return response;
          }).filter((row) => {
            let response = true;
            this.filters.forEach((filter) => {
              if (filter.selected && filter.selected.length > 0) {
                switch (filter.name) {
                  case 'models':
                    response = filter.selected.includes(row.model);
                    break;
                  case 'status':
                    response = filter.selected.includes(row.status);
                    break;
                  case 'locations':
                    response = filter.selected.includes(row.location);
                    break;
                }
              }
            });
            return response;
          });
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