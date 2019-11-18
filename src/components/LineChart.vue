<script>
  import { Line } from 'vue-chartjs';

  export default {
    extends: Line,
    name: "LineChart",
    props: ['chartdata', 'options', 'hasGradientBg'],
    mounted () {
        let firstGradient, secondGradient = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450);
        firstGradient.addColorStop(0, 'rgba(46,91,255, 0.2)');
        secondGradient.addColorStop(0, 'rgba(140,84,255, 0.2)');

        // eslint-disable-next-line no-console
        console.log('ok');

        this.datacollectionLinear.datasets[0].backgroundColor = firstGradient;
        this.datacollectionLinear.datasets[1].backgroundColor = secondGradient;
      this.renderChart(this.chartdata, this.options);

    }
  }
</script>