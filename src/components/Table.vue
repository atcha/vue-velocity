<template>
    <div>
        <header class="flex mb-2 justify-between">
            <div class="text-center" v-for="column in columns" :key="column.name">
                <span class="uppercase text-gray-1 text-sm">{{ column.label }}</span>
            </div>
        </header>
        <ul>
            <li class="flex items-center mb-2 justify-between bg-white border border-solid border-gray-3" v-for="(item, index) in formatedData" :key="index">
                <div class="p-5" v-for="(column) in columns" :key="column.name">
                    <span>{{ item[column.name] }}</span>
                </div>
                <div class="p-5" v-if="actions.length > 0">
                    <Button v-for="(action, index) in actions"
                            :key="index"
                            text-color="primary-normal"
                            @click.native="action.function">
                        {{ action.label }}
                    </Button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Button from "./Button";
    export default {
        name: "Table",
        components: { Button },
        props: {
            columns: {
                name: String,
                required: Boolean,
                label: String,
                sortable: Boolean
            },
            actions: Array,
            data: Array
        },
        computed: {
            formatedData() {
                return this.data.map(columns => {
                    for (const key of Object.keys(columns)) {
                        if (columns[key] instanceof Date) {
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