<template>
    <main>
        <div class="flex justify-between">
            <div>
                <h1>Vehicules Dashboard</h1>
                <span>1192 Total</span>
            </div>
            <Button color="primary-normal" text-color="white">
                Filter List
            </Button>
        </div>

    </main>
</template>

<script>
    import Button from "../components/Button";
    export default {
        name: "Dashboard",
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>