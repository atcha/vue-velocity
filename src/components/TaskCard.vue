<template>
    <div class="p-5 bg-white shadow-2l">
        <div class="card-block">
            <h5 class="card-title">
                <span class="text-muted">#{{item.id}}</span>
                {{item.info}}
            </h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskCard",
        props: ['item']
    }
</script>

<style scoped>

</style>