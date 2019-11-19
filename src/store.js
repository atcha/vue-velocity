import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
    state: {
        items: {
            needed: [
                {
                    id: 0,
                    name: "Spire",
                    price: 233,
                    info: "Tire replacement",
                    date: "June 12"
                },
                {
                    id: 1,
                    name: "Eos",
                    price: 120,
                    info: "Engine Check-up",
                    date: "May 2"
                },
                {
                    id: 5,
                    name: "Eagle",
                    price: 180,
                    info: "Tire replacement",
                    date: "June 6"
                },
                {
                    id: 6,
                    name: "Bebop",
                    price: 1400,
                    info: "Monthly service",
                    date: "June 12"
                }
            ],
            waiting: [
                {
                    id: 2,
                    name: "Expedition",
                    price: 766,
                    info: "Tire replacement",
                    date: "June 3"
                }
            ],
            service: [
                {
                    id: 3,
                    name: "Scorpion",
                    price: 430,
                    info: "Monthly service",
                    date: "June 4"
                }
            ],
            serviced: [
                {
                    id: 4,
                    name: "Empire",
                    price: 542,
                    info: "Engine check-up",
                    date: "June 24"
                }
            ]
        },
        nextId: 1
    },
    mutations: {
        addItem(state, item) {
            state.items.todo.push(Object.assign(item, { id: state.nextId }));
            state.nextId += 1;
        },
        updateItems(state, { items, id }) {
            state.items[id] = items;
        }
    }
});