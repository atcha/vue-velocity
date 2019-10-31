<template>
    <main class="flex flex-col p-20">
        <div class="w-2/3 flex justify-between">
            <div>
                <h1>Vehicules Dashboard</h1>
                <span>1192 Total</span>
            </div>
            <Button color="primary-normal" text-color="white">
                Filter List
            </Button>
        </div>
        <Table class="w-2/3"
               :columns="vehiclesList.columns"
               :actions="vehiclesList.actions"
               :data="vehiclesList.datas">
        </Table>
        <div></div>
    </main>
</template>

<script>
    import Button from "../components/Button";
    import Table from "../components/Table";
    export default {
        name: "Vehicles",
        components: {
            Button,
            Table
        },
        data () {
            return {
                vehiclesList: {
                    columns: [
                        { name: 'id', label: 'Name and id', required: true, sortable: true },
                        { name: 'model', label: 'Vehicle model', required: true, sortable: true },
                        { name: 'service', label: 'Next service', required: true, sortable: true },
                        { name: 'trip', label: 'Trips', required: true, sortable: false },
                        { name: 'energy', label: 'Energy used', required: false, sortable: true },
                        { name: 'actions', label: ''}
                    ],
                    actions: [
                        { name: 'manage', label: 'Manage', function: this.manageVehicles() }
                    ],
                    datas: [
                        { id: 'Spire', model: 'Tesla Model X', service: new Date('08/21/2018'), trip: 774, energy: '450 kWh' },
                        { id: 'Eos', model: 'Volvo Intellisafe', service: new Date('06/12/2018'), trip: 825, energy: '321 kWh' }
                    ]
                }
            }
        },
        methods: {
            manageVehicles () {
                // eslint-disable-next-line no-console
                console.log('Vehicle manage');
            }
        }
    }
</script>

<style scoped>

</style>