<template>
    <main class="flex flex-wrap p-20 min-h-screen">
        <div class="w-1/2">
            <Card class="mr-6" :img="operatingCard.img"
                  :title="operatingCard.title"
                  :content="operatingCard.content">
            </Card>
            <div class="flex mt-6">
                <Card class="mr-6 w-1/2">
                    <header class="w-full flex justify-between items-center mb-2">
                        <h2 class="uppercase text-black-3">Vehicles on track</h2>
                    </header>
                    <section>
                        <h3 class="text-4xl text-left">1,428<span class="text-2xl">cars</span></h3>
                        <p class="flex items-center text-red text-lg"><Icon class="w-6 h-6 mr-2" name="arrow-down-right" />-7.6%</p>
                    </section>
                </Card>
                <Card class="mr-6  w-1/2">
                    <header class="w-full flex justify-between items-center mb-2">
                        <h2 class="uppercase text-black-3">Distance Driven</h2>
                    </header>
                    <section>
                        <h3 class="text-4xl text-left">158.3<span class="text-2xl">mi</span></h3>
                        <p class="flex items-center text-green text-lg"><Icon class="w-6 h-6 mr-2" name="arrow-up-right" />+14.2%</p>
                    </section>
                </Card>
            </div>
        </div>
        <Card class="w-1/2">
            <header class="w-full flex justify-between items-center mb-2">
                <h2 class="uppercase text-black-3">Fleet activity map</h2>
            </header>
            <section>
                <line-chart :chartdata="datacollection" :options="options"/>
            </section>
        </Card>
        <Card class="w-full mt-6">
            <header class="w-full flex justify-between items-center mb-2">
                <h2 class="uppercase text-black-3">Fleet activity map</h2>
            </header>
            <section>
                <l-map
                        ref="map"
                        style="height: 300px; width: 100%"
                        :zoom="zoom"
                        :center="center"
                ></l-map>
            </section>
        </Card>
        <div class="flex w-full mt-6">
            <Card class="w-1/3 mr-6">
                <header class="w-full flex justify-between items-center mb-8">
                    <h2 class="uppercase text-black-3">Fleet activity map</h2>
                </header>
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
            </Card>
            <Card class="w-1/3 mr-6">
                <header class="w-full flex justify-between items-center mb-2">
                    <h2 class="uppercase text-black-3">Fleet activity map</h2>
                </header>
            </Card>
            <Card class="w-1/3">
                <header class="w-full flex justify-between items-center mb-2">
                    <h2 class="uppercase text-black-3">Fleet activity map</h2>
                </header>
            </Card>
        </div>
    </main>
</template>

<script>
  import Avatar from "../components/Avatar";
  import Card from "../components/Card";
  import LineChart from "../components/LineChart";
  import Icon from "../components/Icon";

  import { LMap } from 'vue2-leaflet';

  export default {
    name: 'home',
    components: {
      Avatar,
      Card,
      Icon,
      LineChart,
      LMap
    },
    data() {
      return {
        operatingCard: {
          img: {
            url: require('../assets/img/home/operating-score.png'),
            alt: 'Operating Score',
            width: 203,
            height: 142
          },
          title: 'Welcome to Velocity',
          content: 'All cars are operating well. There were 1,233 trips since your last login.'
        },
        graphCard: {
          title: 'Fleet Activity Map'
        },
        datacollection: {
          labels: ['', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
          datasets: [
            {
              label: 'Today',
              borderColor: '#2E5BFF',
              fill: false,
              lineTension: 0,
              data:[
                {
                  x: 0,
                  y: 30
                },
                {
                  x: 1,
                  y: 20
                },
                {
                  x: 2,
                  y: 60
                },
                {
                  x: 3,
                  y: 55
                },
                {
                  x: 4,
                  y: 118
                },
                {
                  x: 5,
                  y: 35
                },
                {
                  x: 6,
                  y: 70
                },
                {
                  x: 7,
                  y: 55
                },
                {
                  x: 8,
                  y: 90
                }
              ]
            },
            {
              label: 'Yesterday',
              borderColor: '#8C54FF',
              fill: false,
              lineTension: 0,
              data:[
                {
                  x: 0,
                  y: 20
                },
                {
                  x: 1,
                  y: 40
                },
                {
                  x: 2,
                  y: 50
                },
                {
                  x: 3,
                  y: 26
                },
                {
                  x: 4,
                  y: 65
                },
                {
                  x: 5,
                  y: 5
                },
                {
                  x: 6,
                  y: 60
                },
                {
                  x: 6.8,
                  y: 26
                },
                {
                  x: 8,
                  y: 80
                }
              ]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              gridLines: {
                color: "#B0BAC9",
                borderDash: [3, 3]
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 125,
                fontColor: "#B0BAC9"
              }
            }],
            xAxes: [{
              gridLines: {
                color: "#B0BAC9",
                borderDash: [3, 3]
              },
              ticks: {
                fontColor: "#B0BAC9"
              }
            }]
          },
          legend: {
            display: true,
            align: 'end',
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              padding: 20,
              fontColor: "#B0BAC9"
            }
          },
          elements: {
            point: {
              radius: 5,
              hoverRadius: 4,
              borderWidth: 3,
              hoverBorderWidth: 3,
              backgroundColor: "#FFF"
            }
          }
        },
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
            },
            {
                id: 3,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 4,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 5,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 6,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            },
            {
                id: 7,
                name: 'Bebop',
                model: 'Volvo Intellisafe',
                price: '6,432',
                distance: '1,232',
                img: {
                    src: require('../assets/img/vehicles/bebop.png')
                }
            }
        ],
        zoom: 15,
        center: [46.58330879784864, 0.3424481012536944],
      }
    },
    created() {
    }
  }
</script>

<style scoped>
    @import '~leaflet/dist/leaflet.css';

</style>
