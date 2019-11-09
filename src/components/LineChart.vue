<script>
  import { Line } from 'vue-chartjs';

  export default {
    extends: Line,
    name: "LineChart",
    props: ['chartdata', 'options'],
    mounted () {
      this.renderChart(this.chartdata, this.options)
    }
  }
</script>

<style scoped>

</style>