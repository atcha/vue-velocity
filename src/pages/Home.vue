<template>
    <main class="flex flex-wrap p-20 min-h-screen">
        <Card class="mr-6" :img="operatingCard.img"
              :title="operatingCard.title"
              :content="operatingCard.content">
        </Card>
        <Card>
            <header class="w-full flex justify-between items-center mb-2">
                <h2 class="uppercase text-black-3">Fleet activity map</h2>
            </header>
            <section>
                <line-chart :chartdata="datacollection" :options="options"/>
            </section>
        </Card>
    </main>
</template>

<script>
  import Card from "../components/Card";
  import LineChart from "../components/LineChart";

  export default {
    name: 'home',
    components: {
      Card,
      LineChart
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
                color: "#8097B1",
                borderDash: [3, 3]
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 125,
                fontColor: "#8097B1"
              }
            }],
            xAxes: [{
              gridLines: {
                color: "#8097B1",
                borderDash: [3, 3]
              },
              ticks: {
                fontColor: "#8097B1"
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
              fontColor: "#8798AD"
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
        }
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
