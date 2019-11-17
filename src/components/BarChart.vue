<script>
  import { Bar } from 'vue-chartjs';
  export default {
    extends: Bar,
    name: "BarChart",
    props: ['chartdata', 'options'],
    mounted () {
      this.renderChart(this.chartdata, this.options)
    }
  }
</script>