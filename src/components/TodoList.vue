<template>
    <div>
        <div class="overflow-hidden" v-for="todo in todoList" :key="todo.id">
            <transition name="slide-fade">
                <div v-if="!todo.validated" class="flex justify-between items-center mb-4">
                    <p class="w-3/4 text-left lg:mr-4">
                        <input :id="todo.id" @input="validateTodo(todo)" class="flex-initial" type="checkbox"/>
                        <label :for="todo.id">{{standardText}} {{todo.id}}</label>
                    </p>
                    <Alert class="flex-1" :type="todo.alertType" :content="AlertContent"></Alert>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import Alert from "../components/Alert";

    export default {
        name: "TodoList",
        components: {Alert},
        props: {
            todoList: Array,
            standardText: String,
            AlertContent: String
        },
        methods: {
            validateTodo(todo) {
                todo.alertType = 'succes';
                setTimeout(() => {
                    todo.validated = true;
                }, 300)
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/components/checkboxes.css';
    .slide-fade-enter-active {
        transition: all .3s ease-in;
    }

    .slide-fade-leave-active {
        transition: all .4s ease-out;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(100%);
        opacity: 0;
    }
</style>