<template>
    <div class="c-table">
        <table class="w-full mb-2 border-separate">
            <thead>
            <tr>
                <th v-for="column in columns"
                    :key="column.name">
                    <div class="flex items-center justify-center">
                        <span class="uppercase text-gray-1 text-sm">{{ column.label }}</span>
                        <Button class="c-btn-sortable text-black-3"
                                v-if="column.sortable"
                                round
                                @click.native="sortBy(column.name)">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                 class="fill-current w-6 h-6"
                                 :class="sortOrders[column.name] > 0 ? 'is-asc' : 'is-dsc'"
                            >
                                <use xlink:href="#c-icon-keyboard_arrow_down"></use>
                            </svg>
                        </Button>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr class="mb-3 bg-white border border-solid border-gray-3 shadow-2l"
                v-for="(item, index) in formatedData" :key="index">
                <td class="p-5" v-for="column in columns" :key="column.name">
                    <template v-if="'actions' in column">
                        <Button v-for="(action, index) in column.actions"
                                :key="index"
                                class="text-primary-normal hover:text-black-1 hover:bg-primary-light"
                                @click.native="action.function"
                                rounded>
                            {{ action.label }}
                        </Button>
                    </template>
                    <template v-else>
                        <div v-if="typeof item[column.name] === 'object' " class="flex items-center justify-start">
                            <Avatar v-if="item[column.name].img" type="simple" :size="avatarSize" :img="item[column.name].img" class="mr-3" />
                            <Avatar v-else type="simple" :size="avatarSize" class="mr-3" />
                            <div>
                                <p class="text-left leading-tight">{{ item[column.name].name }}</p>
                                <p class="text-left leading-tight text-gray-1">#{{ item[column.name].id }}</p>
                            </div>
                        </div>
                        <span v-else v-html="item[column.name]"></span>
                    </template>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Avatar from "./Avatar";
    import Button from "./Button";

    export default {
        name: "Table",
        components: {
          Avatar,
          Button
        },
        props: {
            columns: {
                name: String,
                required: Boolean,
                label: String,
                sortable: Boolean,
                actions: Object
            },
            data: Array,
            filterKey: String
        },
        data () {
            let sortOrders = {};
            this.columns.forEach((column) => {
                sortOrders[column.name] = 1
            });
            return {
               sortKey: '',
               sortOrders: sortOrders,
               avatarSize: 8
            }
        },
        computed: {
            formatedData() {
                let sortKey = this.sortKey;
                let filterKey = this.filterKey && this.filterKey.toLowerCase();
                let order = this.sortOrders[sortKey] || 1;
                let data = this.data;

                if (filterKey) {
                    data = data.filter((row) => {
                        return Object.keys(row).some((key) => {
                            return String(row[key])
                                    .toLowerCase()
                                    .indexOf(filterKey) > -1;
                        })
                    })
                }

                if (sortKey) {
                    data = data.slice().sort((a, b) => {
                        a = a[sortKey];
                        b = b[sortKey];
                        return (a === b ? 0 : a > b ? 1 : -1) * order;
                    });
                }

                return data.map(columns => {
                    for (const key of Object.keys(columns)) {
                        if (columns[key] instanceof Date) {
                            columns[key] = columns[key].toLocaleDateString();
                        }
                    }
                    return columns;
                });
            }
        },
        methods: {
            sortBy (key) {
                this.sortKey = key;
                this.sortOrders[key] = this.sortOrders[key] * -1;
            }
        }
    }
</script>

<style scoped>
    .c-table table {
        border-spacing: 0 1rem;
    }
    .c-btn-sortable svg { transition: transform .15s ease-in; }
    .c-btn-sortable .is-asc {
        transform: rotateZ(0deg);
    }
    .c-btn-sortable .is-dsc {
        transform: rotateZ(180deg);
    }
</style>