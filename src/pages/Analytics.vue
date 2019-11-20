<template>
	<main class="flex flex-wrap p-20">
		<h1 class="text-2xl leading-none text-black-1 mr-2">Analytics</h1>
		<Card class="w-full mt-6">
			<header class="w-full flex justify-between items-center m-10">
				<h2 class="uppercase text-black-3">Fleet activity map</h2>
			</header>
			<section class="mb-10 mx-10">
				<line-chart :chartdata="datacollectionLinear" :options="lineOptions" :bg-gradient="gradients"/>
			</section>
		</Card>
		<div class="flex w-full  mt-6">
			<Card class="w-1/4 mr-6">
				<header class="w-full flex justify-between items-center mx-10 mt-10">
					<icon class="bg-green-light text-green-normal p-3" size="6" name="check" round></icon>
				</header>
				<section class="mb-10 mx-10">
					<h3 class="text-6xl text-left">$1,428</h3>
					<p class="flex items-center text-black-3 text-lg">
						Vehicles on track
					</p>
				</section>
			</Card>
			<Card class="w-1/4 mr-6">
				<header class="w-full flex justify-between items-center mx-10 mt-10">
					<icon class="bg-blue-light text-blue-normal p-3" size="6" name="location_onplaceroom" round></icon>
				</header>
				<section class="mb-10 mx-10">
					<h3 class="text-6xl text-left">158.3 mi</h3>
					<p class="flex items-center text-black-3 text-lg">
						Distance driven
					</p>
				</section>
			</Card>
			<Card class="w-1/4 mr-6">
				<header class="w-full flex justify-between items-center mx-10 mt-10">
					<icon class="bg-purple-light text-purple-normal p-3" size="6" name="bolt" round></icon>
				</header>
				<section class="mb-10 mx-10">
					<h3 class="text-6xl text-left">87.4 kWh</h3>
					<p class="flex items-center text-black-3 text-lg">
						Energy consumed
					</p>
				</section>
			</Card>
			<Card class="w-1/4">
				<header class="w-full flex justify-between items-center mx-10 mt-10">
					<icon class="bg-yellow-light text-yellow-normal p-3" size="6" name="show_chart" round></icon>
				</header>
				<section class="mb-10 mx-10">
					<h3 class="text-6xl text-left">24.2 h</h3>
					<p class="flex items-center text-black-3 text-lg">
						Total drive time
					</p>
				</section>
			</Card>
		</div>
		<div class="flex w-full mt-6">
			<Card class="w-1/3 mr-6">
				<header class="w-full flex justify-between items-center m-10">
					<h2 class="uppercase text-black-3">Fleet activity map</h2>
				</header>
				<ul v-if="trips" class="mb-10 mx-10">
					<li class="flex justify-between mt-4" v-for="(trip, index) in trips" :key="index">
						<div class="flex-1">
							<p class="text-left">{{ trip.start }} - {{ trip.end }}</p>
							<p class="text-left text-black-3">{{trip.date.toLocaleDateString()}}</p>
						</div>
						<div class="flex-1">
							<p class="text-right">{{ trip.price }}</p>
							<p class="text-right text-black-3">{{trip.time}}</p>
						</div>
					</li>
				</ul>
			</Card>
			<Card class="w-2/3">
				<header class="w-full flex justify-between items-center m-10">
					<h2 class="uppercase text-black-3">Fleet activity map</h2>
				</header>
				<section class="mb-10 mx-10">
					<bar-chart :chartdata="datacollectionMixed" :options="mixedOptions"></bar-chart>
				</section>
			</Card>
		</div>
	</main>
</template>

<script>
  import BarChart from "../components/BarChart";
  import Card from "../components/Card";
  import Icon from "../components/Icon";
  import LineChart from "../components/LineChart";

  export default {
    name: "Analytics",
    components: {
      BarChart,
      Card,
      Icon,
      LineChart
    },
    data() {
      return {
        trips: [
          {
            start: 'Chrysler Building',
            end: 'The High Line',
            price: '$28',
            date: new Date('06/03/2018'),
            time: '24min'
          },
          {
            start: 'Theatre District',
            end: 'Prospect Park',
            price: '$34',
            date: new Date('06/03/2018'),
            time: '21min'
          },
          {
            start: 'Brooklyn Musuem',
            end: 'Time Square',
            price: '$39',
            date: new Date('06/04/2018'),
            time: '45min'
          },
          {
            start: 'Brookfield Place',
            end: 'Chelse Market',
            price: '$29',
            date: new Date('06/04/2018'),
            time: '14min'
          },
          {
            start: 'Smorgasburg',
            end: 'Yankee Stadium',
            price: '$52',
            date: new Date('06/05/2018'),
            time: '52min'
          },
          {
            start: 'Union Square',
            end: 'The Cloisters',
            price: '$44',
            date: new Date('06/03/2018'),
            time: '22min'
          }
        ],
        datacollectionLinear: {
          labels: ['', 'Mar 1', 'Mar 8', 'Mar 15', 'Mar 22', 'Mar 29', 'Apr 5', 'Apr 12', 'Apr 19', 'Apr 26', 'May 2', 'May 9', 'May 16', 'May 23', 'May 30', 'Jun 5', 'Jun 10', 'Jun 19'],
          datasets: [
            {
              label: 'Revenue',
              borderColor: '#2E5BFF',
              pointBackgroundColor: '#FFF',
              fill: true,
              lineTension: 0,
              data: [
                {
                  x: 0,
                  y: 8000
                },
                {
                  x: 1,
                  y: 11500
                },
                {
                  x: 2,
                  y: 9800
                },
                {
                  x: 3,
                  y: 15100
                },
                {
                  x: 4,
                  y: 23000
                },
                {
                  x: 5,
                  y: 22000
                },
                {
                  x: 6,
                  y: 16000
                },
                {
                  x: 7,
                  y: 13800
                },
                {
                  x: 8,
                  y: 16300
                },
                {
                  x: 9,
                  y: 17000
                },
                {
                  x: 10,
                  y: 24500
                },
                {
                  x: 11,
                  y: 19000
                },
                {
                  x: 12,
                  y: 12000
                },
                {
                  x: 13,
                  y: 8900
                },
                {
                  x: 14,
                  y: 16000
                },
                {
                  x: 15,
                  y: 27000
                },
                {
                  x: 16,
                  y: 22000
                },
                {
                  x: 17,
                  y: 21000
                }
              ]
            },
            {
              label: 'Trips',
              borderColor: '#8C54FF',
              pointBackgroundColor: '#FFF',
              fill: true,
              lineTension: 0,
              data: [
                {
                  x: 0,
                  y: 4800
                },
                {
                  x: 1,
                  y: 5000
                },
                {
                  x: 2,
                  y: 7500
                },
                {
                  x: 3,
                  y: 7000
                },
                {
                  x: 4,
                  y: 11500
                },
                {
                  x: 5,
                  y: 13000
                },
                {
                  x: 6,
                  y: 7500
                },
                {
                  x: 7,
                  y: 8500
                },
                {
                  x: 8,
                  y: 6000
                },
                {
                  y: 13700
                },
                {
                  x: 10,
                  y: 18000
                },
                {
                  x: 11,
                  y: 17600
                },
                {
                  x: 12,
                  y: 2500
                },
                {
                  x: 13,
                  y: 6000
                },
                {
                  x: 14,
                  y: 9000
                },
                {
                  x: 15,
                  y: 22500
                },
                {
                  x: 16,
                  y: 14000
                },
                {
                  x: 17,
                  y: 19000
                }
              ]
            }
          ]
        },
        datacollectionMixed: {
          labels: ['Mon', 'Tue', 'Fri', 'Thu', 'Wed', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Average',
              borderColor: '#F7C137',
              fill: false,
              lineTension: 0,
              data: [110, 80, 100, 110, 74, 55, 124],
              type: 'line'
            },
            {
              barPercentage: 0.5,
              categoryPercentage: 0.3,
              label: 'Comfort',
              backgroundColor: '#2E5BFF',
              data: [82, 65, 75, 130, 55, 62, 120]
            },
            {
              barPercentage: 0.5,
              categoryPercentage: 0.3,
              label: 'Premium',
              backgroundColor: '#8C54FF',
              data: [90, 75, 80, 60, 45, 117]
            }
          ]
        },
        lineOptions: {
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
                fontColor: "#B0BAC9",
                callback: (value) => {
                  let tempVal = value.toString();
                  if (tempVal.length >= 4)
                    tempVal = tempVal.substring(0, tempVal.length - 3) + 'k ';
                  return '$' + tempVal;
                }
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
              hoverBorderWidth: 3
            }
          }
        },
        mixedOptions: {
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
              backgroundColor: '#FFF'
            }
          }
        },
        gradients: [
          {
            red: '46',
            green: '91',
            blue: '255'
          },
          {
            red: '140',
            green: '84',
            blue: '255'
          }
        ]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>