<template>
    <div>
        <div v-for="todo in todoList" :key="todo.id" class="flex justify-between items-center mb-4">
            <input class="flex-initial" type="checkbox">
            <div class="flex-1 text-left p-4">{{standardText}} {{todo.id}}</div>
            <Alert class="flex-1" type="error" :content="AlertContent"></Alert>
        </div>
    </div>
</template>

<script>
    import Alert from "../components/Alert";
    export default {
        name: "TodoList",
        components: { Alert },
        props: {
            todoList: Array,
            standardText: String,
            AlertContent: String
        }
    }
</script>

<style scoped>

</style>