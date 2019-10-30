<template>
    <table>
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.name">
                    {{ column.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-0" v-for="(item, index) in formatedData" :key="index">
                <td v-for="(column) in columns" :key="column.name">
                    {{ item[column.name] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Table",
        props: {
            columns: {
                name: String,
                required: Boolean,
                label: String,
                sortable: Boolean
            },
            data: Array
        },
        computed: {
            formatedData () {
                return this.data.map(columns => {
                    for (const key of Object.keys(columns)) {
                        if(columns[key] instanceof Date) {
                            columns[key] = columns[key].toLocaleDateString();
                        }
                    }
                    return columns;
                });
            }
        }
    }
</script>

<style scoped>

</style>